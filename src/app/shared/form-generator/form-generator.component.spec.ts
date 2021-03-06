import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneratorComponent } from './form-generator.component';
import { RegistrationComponent } from 'src/app/modules/registration/registration.component';
import { StringConstants } from 'src/app/constants/string.constants';

describe('FormGeneratorComponent', () => {
  let component: FormGeneratorComponent;
  let fixture: ComponentFixture<FormGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneratorComponent);
    component = fixture.componentInstance;
    component.fields = [
      {
        name: 'mobileNumber',
        component: 'input',
        type: 'text',
        label: 'Mobile number',
        minlength: 0,
        maxlength: 16,
        value: '+6285691580504',
        validations: [
          {
            name: 'required',
            validator: 'required',
            message: 'Mobile Number is required'
          },
          {
            name: 'minlength',
            validator: 12,
            message: 'Minimal input is 12'
          },
          {
            name: 'maxlength',
            validator: 15,
            message: 'Maximal input is 15'
          },
          {
            name: 'pattern',
            validator: StringConstants.REGEX_PHONE_NUMBER_INA,
            message: 'Invalid  phone number'
          },
        ]
      },
      {
        name: 'address',
        component: 'input',
        type: 'text',
        label: 'address',
        minlength: 0,
        maxlength: 255,
        value: ''
      },
      {
        name: 'gender',
        component: 'radiobutton',
        label: 'Gender',
        options: [
          { key: '0', value: 'Male' },
          { key: '1', value: 'Female' }
        ]
      }
    ];
    fixture.detectChanges();
  });

  it('Should Create', () => {
    expect(component).toBeTruthy();
  });

  it('Save Process', () => {
    const saveBtn = spyOn(component.save, 'emit');
    component.saveProcess('');
    expect(saveBtn).toHaveBeenCalled();
    expect(saveBtn).toHaveBeenCalledWith('');

  });

});
