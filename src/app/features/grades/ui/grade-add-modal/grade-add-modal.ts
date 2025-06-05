import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GradeForm } from '../grade-form/grade-form';
import { GradeBuilder } from '../../utilis/grade.builder';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'pr-grade-add-modal',
  imports: [GradeForm, MatButtonModule, MatDialogModule],
  templateUrl: './grade-add-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradeAddModal {
  readonly dialogRef = inject(MatDialogRef<GradeAddModal>);
  protected readonly gradeForm = GradeBuilder.build();

  protected save(): void {
    if (this.gradeForm.invalid) {
      this.gradeForm.markAllAsTouched();
    } else {
      this.dialogRef.close(this.gradeForm.value);
    }
  }
}
