import { Component, OnInit } from '@angular/core';
import { IField } from 'src/app/interfaces/field';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dob',
  templateUrl: './dob.component.html',
  styleUrls: ['./dob.component.scss']
})
export class DobComponent implements OnInit {

  field: IField;
  group: FormGroup;
  required: boolean;
  day = this.commonService.getDay();
  month = this.commonService.getMonth();
  year = this.commonService.getYear(17);

  selectedDay: string;
  selectedMonth: string;
  selectedYear: string;

  constructor(
    private commonService: CommonService
  ) { }

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
