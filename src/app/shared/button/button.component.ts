import { Component, OnInit } from '@angular/core';
import { IField } from 'src/app/interfaces/field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  field: IField;
  group: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
