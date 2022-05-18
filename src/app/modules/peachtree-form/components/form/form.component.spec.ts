import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { mockProvider } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { SubmitButtonComponent } from 'src/app/modules/bb-ui/components/submit-button/submit-button.component';
import { formGroupMock } from 'src/testing/form-group.mock';
import { formConfigMock } from 'src/testing/form.config.mock';
import { FormService } from '../../services/form/form.service';

import { FormComponent } from './form.component';

fdescribe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const trigerChange = (component: FormComponent): void => {
    component.ngOnChanges({
      questions: {
        previousValue: undefined,
        currentValue: formConfigMock,
        isFirstChange: () => true,
        firstChange: true,
      },
    });
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent, MockComponent(SubmitButtonComponent)],
      providers: [mockProvider(FormService)],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.questions = formConfigMock;
  });

  it('should build form on init', () => {
    // @ts-ignore
    const buildFormSpy = spyOn(component, 'buildForm');
    fixture.detectChanges();
    trigerChange(component);
    expect(buildFormSpy).toHaveBeenCalled();
  });

  it('should call formService to build form', () => {
    const formServiceMock = TestBed.inject(FormService);
    (<jasmine.Spy>formServiceMock.toFormGroup).and.returnValue(formGroupMock);
    fixture.detectChanges();
    trigerChange(component);
    expect(component.form.controls.toAccount).toBeDefined();
    expect(component.form.controls.badControlName).not.toBeDefined();
  });

  it('should validate form before emitting value', () => {
    const validateSpy = spyOn(component, 'validate');
    fixture.detectChanges();
    component.form = formGroupMock;
    component.onSubmit();
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should not emit value if form is invalid', () => {
    const validateSpy = spyOn(component.value, 'emit');
    fixture.detectChanges();
    component.form = formGroupMock;
    console.log(component.form.valid);
    component.onSubmit();
    expect(validateSpy).not.toHaveBeenCalled();
  });

  it('should emit value if form is valid', () => {
    const validateSpy = spyOn(component.value, 'emit');
    fixture.detectChanges();
    component.form = formGroupMock;
    component.form.setValue({ toAccount: 'some Account' });
    console.log(component.form.valid);
    component.onSubmit();
    expect(validateSpy).toHaveBeenCalled();
  });
});
