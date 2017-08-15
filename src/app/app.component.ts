import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <img [src]="imageurl"/>
    <table [border]="borderthickness">
      <tr>
        <td [attr.colspan]="colspan">&nbsp;</td>
      </tr>
      <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      </tr>
    </table>
  `
 ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  borderthickness = 3;

  colspan = 3;


  imageurl = 'http://lorempixel.com/400/200';

  title = 'app';
}
