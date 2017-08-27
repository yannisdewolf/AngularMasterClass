import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {SignupformValidators} from '../sigupform/signupform-validators';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {

  form = new FormGroup({
    oldPassword: new FormControl('', [Validators.required], [SignupformValidators.validateExistingAsync] ),
    newValues: new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    }, SignupformValidators.validateNewChosenPassword)

  });

  constructor() { }

  ngOnInit() {
  }

  get oldPassword() {
    return this.form.get('oldPassword') ;
  }

  get newPassword() {
    return this.form.get('newValues.newPassword');
  }

  get confirmedPassword() {
    return this.form.get('newValues.confirmPassword');

  }

  get newValues() {
    return this.form.get('newValues');
  }
}

