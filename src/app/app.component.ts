import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  canSave: boolean = true;

  viewMode = 'somethingElse';

  courses = [];

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  loadCourses() {
    this.courses = [
      {
        id: 1,
        name: 'course1'
      },
      {
        id: 2,
        name: 'course2'
      },
      {
        id: 3,
        name: 'course3'
      }
    ];
  }
}


