import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type='text' (keyup.enter)='email = $event.target.value; onKeyUp()' [value]='email'>


    <input [(ngModel)]='email' (keyup.enter)='onKeyUp()'>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  email = 'me@example.com';

  onKeyUp() {
    console.log(this.email);
  }

}


