import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDatabase} from '../in-memory-database';


const modules = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
];

@NgModule({
  declarations: [],
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class CoreModule { }
