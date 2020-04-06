import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IField } from 'src/app/interfaces/field';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Input() fields: IField[] = [];
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.createControl();
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if (field.component === 'button') { return; }
      const control = this.fb.control({ value: field.value, disabled: field.disabled }, this.bindValidations(field.validations || []));
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const value = {
        value: this.form.value,
        fields: this.fields
      };
      this.submit.emit(value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }
}
