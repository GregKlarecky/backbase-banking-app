import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const NegativeNumber: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value < 0
    ? { negativeNumbers: 'Negative numbers are not allowed.' }
    : null;
};
