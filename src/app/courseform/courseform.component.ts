import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  categories = [
    {
      id: 1,
      name: 'Development'
    },{
      id: 2,
      name: 'Cooking'
    }
  ];

  constructor() { }

  ngOnInit() {
  }


  submit(course: NgForm) {

    console.log('submitted form ', course);
  }


}
