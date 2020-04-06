import { Component, OnInit } from '@angular/core';
import { IForm, IEmitReturn } from 'src/app/interfaces/form';
import { IField } from 'src/app/interfaces/field';
import { CommonService } from 'src/app/services/common.service';
import { StringConstants } from 'src/app/constants/string.constants';
import { WebAddressConstant } from 'src/app/constants/webaddress.constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, IForm {

  formProperties: IField[];
  disabled = false;
  values = {};

  constructor(
    private commonService: CommonService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formConfig(this.disabled, this.values);
  }

  formConfig(disabledField: boolean, values: any): void {
    this.formProperties = [
      {
        name: 'mobileNumber',
        component: 'input',
        type: 'text',
        label: 'Mobile number',
        minlength: 12,
        maxlength: 15,
        value: (values.mobileNumber) ? values.mobileNumber : '',
        disabled: disabledField,
        validations: [
          {
            name: 'required',
            validator: 'required',
            message: 'Mobile number is required'
          },
          {
            name: 'pattern',
            validator: StringConstants.REGEX_PHONE_NUMBER_INA,
            message: 'Please enter valid indonesian phone number'
          },
          {
            name: 'minlength',
            validator: 12,
            message: 'Minimal length is 12 characters'
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
        disabled: disabledField,
        value: (values.firstName) ? values.firstName : '',
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
        disabled: disabledField,
        value: (values.lastName) ? values.lastName : '',
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
        label: 'Date of Birth',
        disabled: disabledField,
        value: (values.dob) ? values.dob : null
      },
      {
        name: 'gender',
        component: 'radiobutton',
        label: 'Gender',
        disabled: disabledField,
        value: (values.gender) ? values.gender : 0,
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
        disabled: disabledField,
        value: (values.email) ? values.email : '',
        validations: [
          {
            name: 'required',
            validator: 'required',
            message: 'Email is mandatory'
          },
          {
            name: 'pattern',
            validator: StringConstants.REGEX_EMAIL,
            message: 'Invalid email format'
          }
        ]
      }, {
        name: 'register',
        component: 'button',
        label: 'Register',
        disabled: disabledField,
        type: 'submit'
      }, {
        name: 'login',
        component: 'button',
        label: 'Login',
        type: 'button',
        hidden: (disabledField) ? false : true,
        class: 'button-login',
        actions: this.goToLogin
      }
    ];
  }

  save(r: IEmitReturn): void {
    this.commonService.callHttpPost(WebAddressConstant.REGISTRATION_SAVE, r.value).subscribe(data => {
      this.snackBar.open(StringConstants.REGISRATION_MESSAGE_INSERT_SUCCESS, 'close', { duration: 5000 });
      this.disabled = true;
      this.values = r.value;
      this.ngOnInit();
    }, err => {
      this.snackBar.open(err.error.data, 'dismiss', { duration: 5000 });
    });
  }

  goToLogin() {
  }
}
