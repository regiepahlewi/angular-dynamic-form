import { Component, OnInit } from '@angular/core';
import { IField } from 'src/app/interfaces/field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  callClick: Function;
  field: IField;
  group: FormGroup;
  hidden = false;

  constructor() { }

  ngOnInit(): void {
    if (this.field.type !== 'submit') {
      this.callClick = this.field.actions;
    }

    this.hidden = (this.field.hidden) ? this.field.hidden : false;
  }

  disabledBtn(): boolean {
    let res = false;
    if (this.field.type === 'submit') {
      if (!this.group.valid) {
        res = true;
      }
    } else {
      res = this.field.disabled;
    }
    return res;
  }

}
