import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

const modules = [
  CommonModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule { }
