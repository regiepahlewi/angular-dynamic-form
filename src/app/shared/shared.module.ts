import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Material Design Component
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

// Component
import { InputComponent } from './input/input.component';
import { DobComponent } from './dob/dob.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { ButtonComponent } from './button/button.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsDirective } from './directive/field.directive';

// Service
import { CommonService } from '../services/common.service';

@NgModule({
  declarations: [
    FieldsDirective,
    InputComponent,
    DobComponent,
    RadiobuttonComponent,
    ButtonComponent,
    FormGeneratorComponent,
    DynamicFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    FormGeneratorComponent
  ],
  providers : [
    CommonService
  ]
})
export class SharedModule { }
