import { P } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GradeBuilderForm } from '../data-types/grade-form.interface';

export class GradeBuilder {
  static build(): FormGroup<GradeBuilderForm> {
    return new FormGroup<GradeBuilderForm>({
      id: new FormControl(null),
      descriptiveGrade: new FormControl(null),
      minPercentage: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      symbolicGrade: new FormControl(null, Validators.required),
      maxPercentage: new FormControl({ value: null, disabled: true }),
    });
  }
}
