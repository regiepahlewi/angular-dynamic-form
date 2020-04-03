import { Component, OnInit } from '@angular/core';
import { IField } from 'src/app/interfaces/field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.scss']
})
export class DobComponent implements OnInit {

  field: IField;
  group: FormGroup;
  required: boolean;

  constructor() { }

  ngOnInit(): void {
    this.required = this.field.validations.some(i => i.name === 'required');
  }

}
