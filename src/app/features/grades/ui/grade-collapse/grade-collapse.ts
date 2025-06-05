import { ChangeDetectionStrategy, Component, effect, inject, input, output, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';

import { GradeBuilder } from '../../utilis/grade.builder';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Grades } from '../../services/grades';
import { Grade, GradeTSend } from '../../data-types/grade.interface';
import { GradeForm } from '../grade-form/grade-form';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SUCCESS_DELETE_GRADE, DEFAULT_SNACK_BAR_ACTION_LABEL, ERROR_DELETE_GRADE } from '../../utilis/grade-notifications';

@Component({
  selector: 'pr-grade-collapse',
  imports: [MatExpansionModule, MatIcon, ReactiveFormsModule, MatInputModule, MatButtonModule, GradeForm],
  templateUrl: './grade-collapse.html',
  styleUrl: './grade-collapse.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradeCollapse {
  public readonly gradeData = input.required<Grade>();
  public readonly reloadList = output<void>();
  public readonly editGradeEmitter = output<Partial<GradeTSend>>();
  private readonly gradesService = inject(Grades);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly gradeForm = GradeBuilder.build();
  readonly panelOpenState = signal(false);

  constructor() {
    effect(() => {
      this.gradeForm.patchValue(this.gradeData());
    });
  }

  protected editGrade(): void {
    if (this.gradeForm.invalid) {
      this.gradeForm.markAllAsTouched();
    } else {
      delete this.gradeForm.value.maxPercentage;
      this.editGradeEmitter.emit(this.gradeForm.value);
    }
  }

  protected deleteGrade(): void {
    this.gradesService.deleteGrade(this.gradeData().id).subscribe({
      next: () => {
        this.reloadList.emit();
        this.snackBar.open(SUCCESS_DELETE_GRADE, DEFAULT_SNACK_BAR_ACTION_LABEL);
      },
      error: () => {
        this.snackBar.open(ERROR_DELETE_GRADE, DEFAULT_SNACK_BAR_ACTION_LABEL);
      },
    });
  }
}
