import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   {{ course.title | uppercase |lowercase}} <br>
    {{course.price | currency:'EUR':true:'1.2-2'}} <br>
    {{course.students | number}} <br>
    {{course.rating | number:'1.2-5'}}  (minstens 1 geheel getal, min2 decimalen, maximum 5 decimalen <br>
    {{course.relaseDate | date}} (zie datePipe class)
    
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  course = {
    title: 'the cmplete guide',
    rating: 14.9766,
    students: 12345,
    price: 10.9688,
    relaseDate: new Date(2016, 3, 1)
  };


}


