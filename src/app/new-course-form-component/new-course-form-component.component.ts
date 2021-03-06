import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent {

  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [ '', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([{value: 'eten'}, {value: 'slapen'}])
    });
  }

  get topics() {
    return this.form.get('topics').controls
  }

  submit(form) {
    console.log('hello world');
    console.log(form.value);
  }

  addTopic() {

  }
}
