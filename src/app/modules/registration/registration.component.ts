import { Component, OnInit } from '@angular/core';
import { IForm, IEmitReturn } from 'src/app/interfaces/form';
import { IField } from 'src/app/interfaces/field';
import { CommonService } from 'src/app/services/common.service';
import { StringConstants } from 'src/app/constants/string.constants';
import { WebAddressConstant } from 'src/app/constants/webaddress.constants';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, IForm {

  formProperties: IField[];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.formConfig();
  }

  formConfig(): void {
    this.formProperties = [
      {
        name: 'mobileNumber',
        component: 'input',
        type: 'text',
        label: 'Mobile number',
        minlength: 12,
        maxlength: 15,
        validations: [
          {
            name: 'required',
            validator: 'required',
            message: 'Mobile number is required'
          },
          {
            name: 'pattern',
            validator: StringConstants.REGEX_PHONE_NUMBER_INA,
            message: 'Invalid mobile Number format'
          },
          {
            name: 'minlength',
            validator: 12,
            message: 'Invalid mobile Number, minimal length is 12'
          }
        ]
      },
      {
        name: 'firstName',
        component: 'input',
        type: 'text',
        label: 'First name',
        minlength: 0,
        maxlength: 255,
        validations: [
          {
            name: 'required',
            validator: 'required',
            message: 'First name is required'
          }
        ]
      },
      {
        name: 'lastName',
        component: 'input',
        type: 'text',
        label: 'Last name',
        minlength: 0,
        maxlength: 255,
        validations: [
          {
            name: 'required',
            validator: 'required',
            message: 'Last name is mandatory'
          }
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
          { key: 0, value: 'Male' },
          { key: 1, value: 'Female' }
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
            validator: 'required',
            message: 'Email is mandatory'
          }
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
        disabled: true,
        actions: this.goToLogin
      }
    ];
  }

  save(r: IEmitReturn): void {
    this.commonService.callHttpPost(WebAddressConstant.REGISTRATION_SAVE, r.value).subscribe(data => {
      console.log(data);
    });
    r.fields[r.fields.findIndex(val => val.name === 'login')].disabled = false;
  }

  goToLogin() {
    console.log('login click');
  }
}
