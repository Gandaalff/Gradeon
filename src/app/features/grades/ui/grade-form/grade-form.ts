import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GradeBuilderForm } from '../../data-types/grade-form.interface';
import { NgClass } from '@angular/common';
import { MAX_PERCENTAGE_VALUE, MIN_PERCENTAGE_VALUE, REQUIRE_ERROR } from '../../../../core/utilis/global-errors';

@Component({
  selector: 'pr-grade-form',
  imports: [
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
    NgClass,
  ],
  templateUrl: './grade-form.html',
  styleUrl: './grade-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradeForm {
  public readonly gradeForm = input.required<FormGroup<GradeBuilderForm>>();
  public readonly showButton = input<boolean>(true);
  public readonly isModalForm = input<boolean>(false);
  public readonly save = output();
  protected readonly requireError = REQUIRE_ERROR
  protected readonly minError = MIN_PERCENTAGE_VALUE
  protected readonly maxError = MAX_PERCENTAGE_VALUE

}
