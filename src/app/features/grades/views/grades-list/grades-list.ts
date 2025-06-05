import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { GradeCollapse } from '../../ui/grade-collapse/grade-collapse';
import { Grades } from '../../services/grades';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  CREATE_GRADE_CONFLICT_ERROR_AS014,
  DEFAULT_SNACK_BAR_ACTION_LABEL,
  ERROR_EDIT_GRADE,
  ERROR_GRADE_WITH_MIN_PROC_ALREADY_EXIST,
  SUCCESS_EDIT_GRADE,
} from '../../utilis/grade-notifications';
import { Grade, GradeTSend } from '../../data-types/grade.interface';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { GradeAddModal } from '../../ui/grade-add-modal/grade-add-modal';
import { DEFAULT_MODAL_WIDTH } from '../../../../core/ui/utilis/global-const.helper';

@Component({
  selector: 'pr-grades-list',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    GradeCollapse,
    MatIcon,
    MatButtonModule,
  ],
  templateUrl: './grades-list.html',
  styleUrl: './grades-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GradesList {
  private readonly gradesService = inject(Grades);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  protected readonly gradeResource = this.gradesService.gradesResourse;
  protected gradeDataList = computed<Grade[]>(() => {
    if (!this.gradeResource.value()) return [];
    return this.gradeResource
      .value()
      ?.sort((a, b) => a.minPercentage - b.minPercentage)
      .map((item, index, array) => {
        const nextItem = array[index + 1];
        const maxPercentage = nextItem ? nextItem.minPercentage - 1 : 100;
        return {
          ...item,
          maxPercentage,
        };
      })!;
  });
  private readonly createGradeDuplicateMinPercentageError = 'AS014';

  protected reloadList(): void {
    this.gradeResource.reload();
  }

  protected editGrade(grade: GradeTSend): void {
    const gradeId = grade.id;
    delete grade.id;
    const isGradeValid = this.validateMinPercentageValue(grade);
    if (gradeId && isGradeValid) {
      this.gradesService.updateGrade(gradeId, grade).subscribe({
        next: () => {
          this.reloadList();
          this.snackBar.open(
            SUCCESS_EDIT_GRADE,
            DEFAULT_SNACK_BAR_ACTION_LABEL
          );
        },
        error: () => {
          this.snackBar.open(ERROR_EDIT_GRADE, DEFAULT_SNACK_BAR_ACTION_LABEL);
        },
      });
    }
  }

  protected addGrade(): void {
    const dialogRef = this.dialog.open(GradeAddModal, {
      width: DEFAULT_MODAL_WIDTH,
    });
    dialogRef.afterClosed().subscribe((newGrade) => {
      if (newGrade) {
        const isGradeValid = this.gradeResource.hasValue()
          ? this.validateMinPercentageValue(newGrade)
          : true;
        if (isGradeValid) {
          delete newGrade.id;
          this.gradesService.createGrade(newGrade).subscribe({
            next: () => {
              this.reloadList();
              this.snackBar.open(
                SUCCESS_EDIT_GRADE,
                DEFAULT_SNACK_BAR_ACTION_LABEL
              );
            },
            error: (err) => {
              const errorCode = err?.error?.errorCode;
              if (errorCode === this.createGradeDuplicateMinPercentageError) {
                this.snackBar.open(
                  CREATE_GRADE_CONFLICT_ERROR_AS014,
                  DEFAULT_SNACK_BAR_ACTION_LABEL
                );
              } else {
                this.snackBar.open(
                  ERROR_EDIT_GRADE,
                  DEFAULT_SNACK_BAR_ACTION_LABEL
                );
              }
            },
          });
        }
      }
    });
  }

  private validateMinPercentageValue(gradeToCheck: GradeTSend): boolean {
    const sameMinPercentExist = this.gradeDataList().find(
      (gradeListItem) =>
        gradeListItem.minPercentage === gradeToCheck.minPercentage
    );

    if (!sameMinPercentExist) {
      return true;
    } else {
      this.snackBar.open(
        ERROR_GRADE_WITH_MIN_PROC_ALREADY_EXIST,
        DEFAULT_SNACK_BAR_ACTION_LABEL
      );
      return false;
    }
  }
}
