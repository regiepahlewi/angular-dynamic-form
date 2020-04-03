import { Component, OnInit } from '@angular/core';
import { IForm, IEmitReturn } from 'src/app/interfaces/form';
import { IField } from 'src/app/interfaces/field';
import { CommonService } from 'src/app/services/common.service';
import { WebAddressConstant } from 'src/app/constants/string.constants';

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
        minlength: 0,
        maxlength: 16,
        value: '0856',
        validations: [
          {
            name: 'required',
            validator: 'required',
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
            validator: 'required',
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
            validator: 'required',
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
            validator: 'required',
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
