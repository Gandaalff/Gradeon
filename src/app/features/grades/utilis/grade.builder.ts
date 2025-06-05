import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GradeBuilderForm } from '../data-types/grade-form.interface';
import { MIN_PERCENTAGE_VALUE, MAX_PERCENTAGE_VALUE } from '../../../core/utilis/global-const.helper';

export class GradeBuilder {
  static build(): FormGroup<GradeBuilderForm> {
    return new FormGroup<GradeBuilderForm>({
      id: new FormControl(null),
      descriptiveGrade: new FormControl(null),
      minPercentage: new FormControl(null, [
        Validators.required,
        Validators.min(MIN_PERCENTAGE_VALUE),
        Validators.max(MAX_PERCENTAGE_VALUE),
      ]),
      symbolicGrade: new FormControl(null, Validators.required),
      maxPercentage: new FormControl({ value: null, disabled: true }),
    });
  }
}
