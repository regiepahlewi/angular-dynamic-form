import { Component, OnInit, Input, ViewChild, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { IField } from 'src/app/interfaces/field';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {

  @Input() fields: IField[];
  @Output() save = new EventEmitter();

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.fields !== 'undefined' && changes.fields.firstChange !== true) {
      this.ngOnInit();
    }
  }

  ngOnInit(): void {
    this.fieldConfigInterceptor();
  }

  saveProcess(e: any): void {
    this.save.emit(e);
  }

  fieldConfigInterceptor() {
    if (this.fields.length > 0) {
      for (const data of this.fields) {

        // convert to angular validation
        const validation = data.validations;
        if (validation) {
          validation.forEach(val => {
            if (val.name === 'required') {
              val.validator = Validators.required;
            } else if (val.name === 'pattern') {
              val.validator = Validators.pattern(val.validator);
            } else if (val.name === 'min' || val.name === 'minlength') {
              val.name = 'minlength';
              val.validator = Validators.minLength(val.validator);
            } else if (val.name === 'max' || val.name === 'maxlength') {
              val.name = 'maxlength';
              val.validator = Validators.maxLength(val.validator);
            }
          });
        } else {
          data.validations = [];
        }

        // give default value for radiobutton
        if (data.component === 'radiobutton' && !data.value) {
          data.value = data.options[0].key;
        }
      }
    }
  }
}
