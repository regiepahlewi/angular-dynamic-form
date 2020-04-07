import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IField } from 'src/app/interfaces/field';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormComponent],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    component.fields = [
      {
        name: 'mobileNumber',
        component: 'input',
        type: 'text',
        label: 'Mobile number',
        minlength: 0,
        maxlength: 16,
        value: '0856',
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Mobile Number is required'
          },
        ]
      },
      {
        name: 'firstName',
        component: 'input',
        type: 'text',
        label: 'First name',
        minlength: 0,
        maxlength: 100,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'First name is required'
          },
        ]
      },
      {
        name: 'lastName',
        component: 'input',
        type: 'text',
        label: 'Last name',
        minlength: 0,
        maxlength: 100,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Last name is mandatory'
          },
        ]
      },
      {
        name: 'dob',
        component: 'dob',
        label: 'Date of Birth'
      },
      {
        name: 'gender',
        component: 'radiobutton',
        label: 'Gender',
        options: [
          { key: '0', value: 'Male' },
          { key: '1', value: 'Female' }
        ]
      },
      {
        name: 'email',
        component: 'input',
        type: 'email',
        label: 'Email',
        minlength: 0,
        maxlength: 255,
        validations: [
          {
            name: 'required',
            validator: Validators.required,
            message: 'Email is mandatory'
          },
        ]
      }, {
        name: 'register',
        component: 'button',
        label: 'Register',
        type: 'submit'
      }, {
        name: 'login',
        component: 'button',
        label: 'Login',
        type: 'button',
        disabled: true
      }
    ];
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validations All Field', () => {

    expect(component.form.valid).toBeFalsy();

    component.form.controls.mobileNumber.setValue('+6285691580504');
    component.form.controls.firstName.setValue('Regie');
    component.form.controls.lastName.setValue('Pahlewi');
    component.form.controls.email.setValue('regiealgipahlewi@gmail.com');
    component.form.updateValueAndValidity();
    component.validateAllFormFields(component.form);

    expect(component.form.valid).toBeTruthy();
  });

  it('Submit Valid Value', () => {

    component.form.controls.mobileNumber.setValue('+6285691580504');
    component.form.controls.firstName.setValue('Regie');
    component.form.controls.lastName.setValue('Pahlewi');
    component.form.controls.email.setValue('regiealgipahlewi@gmail.com');
    component.form.updateValueAndValidity();

    const submitBtn = spyOn(component.onSubmitBtn, 'emit');
    const value = {
      value: component.form.value,
      fields: component.fields
    };

    component.onSubmit();

    expect(submitBtn).toHaveBeenCalled();
    expect(submitBtn).toHaveBeenCalledWith(value);
  });

  it('Submit Invalid Value', () => {
    component.onSubmit();
    expect(component.form.valid).toBeFalsy();
  });

});
