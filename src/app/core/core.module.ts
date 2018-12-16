import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDatabase} from '../in-memory-database';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';


const modules = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule
];
const components = [
  NavBarComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class CoreModule { }
