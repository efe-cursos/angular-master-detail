import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.scss']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl;

  constructor() {
  }

  ngOnInit() {
  }

  get errorMessage(): string | null {
    if (this.mustShowErrorMessage()) {
      return this.getMessage();
    }
    return null;
  }

  private mustShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  private getMessage(): string | null {
    if (!this.formControl.errors) {
      return null;
    }
    const errors = this.formControl.errors;
    if (errors.required) {
      return 'dado obrigatório';
    } else if (errors.minlength) {
      return `deve ter no mínimo ${errors.minlength.requiredLength} caracteres`;
    } else if (errors.maxlength) {
      return `deve ter no máximo ${errors.maxlength.requiredLength} caracteres`;
    }
    return null;
  }
}
