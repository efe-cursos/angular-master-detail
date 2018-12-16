import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule
];
const components = [
  BreadcrumbComponent,
  PageHeaderComponent,
  FormFieldErrorComponent,
  ServerErrorMessagesComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class SharedModule {
}
