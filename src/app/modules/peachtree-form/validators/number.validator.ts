import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const NumberValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return isNaN(control.value) ? { number: 'Only numbers are allowed.' } : null;
};
