import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent {

  form = new FormGroup({
    topics: new FormArray([])
  });

  get bla() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl) {
    const currentIndex = this.bla.controls.indexOf(topic);
    this.bla.removeAt(currentIndex);
  }

  addTopic(topic: HTMLInputElement) {
    this.bla.push(
      new FormControl(topic.value)
    );
    topic.value = '';
  }
}
