import { Component, OnInit } from '@angular/core';
import { IForm, IEmitReturn } from 'src/app/interfaces/form';
import { IField } from 'src/app/interfaces/field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, IForm {

  formProperties: IField[];
  disabled: false;
  values = {};

  constructor() { }

  ngOnInit(): void {
    this.formConfig(this.disabled, this.values);
  }

  formConfig(disabledField: boolean, values: any): void {
    this.formProperties = [
      {
        name: 'email',
        component: 'input',
        type: 'text',
        label: 'email',
        minlength: 0,
        maxlength: 255,
        value: (values.email) ? values.email : '',
        disabled: disabledField,
        validations: [
          {
            name: 'required',
            validator: 'required',
            message: 'Email is required'
          }
        ]
      },
      {
        name: 'password',
        component: 'input',
        type: 'text',
        label: 'Password',
        minlength: 0,
        maxlength: 255,
        disabled: disabledField,
        value: (values.password) ? values.password : '',
        validations: [
          {
            name: 'required',
            validator: 'required',
            message: 'Password is required'
          }
        ]
      },
      {
        name: 'login',
        component: 'button',
        label: 'login',
        disabled: disabledField,
        type: 'submit'
      }
    ];
  }

  save(e: IEmitReturn): void {

  }

}
