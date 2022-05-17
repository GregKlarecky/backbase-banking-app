import { FormControl, FormGroup, Validators } from '@angular/forms';

export const formGroupMock = new FormGroup({
  account: new FormControl('Testing Account', Validators.required)
});
