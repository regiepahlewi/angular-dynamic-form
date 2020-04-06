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
  day = [
    { key: '01', value: 1 },
    { key: '02', value: 2 },
    { key: '03', value: 3 },
    { key: '04', value: 4 },
    { key: '05', value: 5 },
  ];

  month = [
    { key: '01', value: 'January' },
    { key: '02', value: 'February' },
    { key: '03', value: 'March' },
    { key: '05', value: 'April' },
    { key: '06', value: 'May' },
  ];

  year = [
    { key: '2009', value: 2009 },
    { key: '2010', value: 2010 },
    { key: '2011', value: 2011 },
    { key: '2012', value: 2012 },
    { key: '2013', value: 2013 },
  ];

  selectedDay: string;
  selectedMonth: string;
  selectedYear: string;

  constructor() { }

  ngOnInit(): void {
    if (this.group.controls[this.field.name].value !== null) {
      this.selectedYear = this.group.controls[this.field.name].value.split('-')[0];
      this.selectedMonth = this.group.controls[this.field.name].value.split('-')[1];
      this.selectedDay = this.group.controls[this.field.name].value.split('-')[2];
    }
  }

  getValueDob() {
    this.field.value = (this.selectedDay && this.selectedMonth && this.selectedYear)
      ? this.selectedYear + '-' + this.selectedMonth + '-' + this.selectedDay : null;
    this.group.controls[this.field.name].setValue(this.field.value);
  }



}
