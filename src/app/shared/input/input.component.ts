import { Component, OnInit } from '@angular/core';
import { IField } from 'src/app/interfaces/field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  field: IField;
  group: FormGroup;
  required: boolean;

  constructor() { }

  ngOnInit(): void {
    this.required = this.field.validations.some(i => i.name === 'required');
  }

}
