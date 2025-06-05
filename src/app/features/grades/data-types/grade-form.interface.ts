import { FormControl } from '@angular/forms';

export interface GradeBuilderForm {
  id: FormControl<string | null>;
  descriptiveGrade: FormControl<string | null>;
  minPercentage: FormControl<number | null>;
  symbolicGrade: FormControl<string | null>;
  maxPercentage: FormControl<number | null>;
}
