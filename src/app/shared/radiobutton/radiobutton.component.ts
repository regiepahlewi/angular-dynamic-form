import { Component, OnInit } from '@angular/core';
import { IField } from 'src/app/interfaces/field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})
export class RadiobuttonComponent implements OnInit {

  field: IField;
  group: FormGroup;
  required: boolean;

  constructor() { }

  ngOnInit(): void {
    this.required = this.field.validations.some(i => i.name === 'required');
  }

}
