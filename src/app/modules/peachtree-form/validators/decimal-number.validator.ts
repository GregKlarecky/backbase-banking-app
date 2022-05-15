import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const DecimalNumber: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const hasThreeDigitsAfterComa = new RegExp(/\d+\.\d{3,}/, 'g');
  return hasThreeDigitsAfterComa.test(control.value)
    ? { decimalNumbers: 'Only decimal numbers are allowed.' }
    : null;
};
