import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input #email type='text' (keyup.enter)='onKeyUp(email.value)'>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  onKeyUp(email) {
    console.log(email);
  }

}


