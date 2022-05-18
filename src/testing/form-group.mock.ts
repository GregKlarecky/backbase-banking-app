import { FormControl, FormGroup, Validators } from '@angular/forms';

export const formGroupMock = new FormGroup({
  toAccount: new FormControl(null, Validators.required),
});
