import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [style.backgroundColor]="isActive? 'blue':'white'">groen</div>

    
    <button class="btn btn-primary" [class.active]="isActive"> klik</button>
    <button class="btn btn-primary" [class.active]="isActive" disabled>active disabled</button>
    <button class="btn btn-primary" [class.active]="!isActive">klik</button>
    <button class="btn btn-primary" [class.active]="!isActive" disabled>!active disabled</button>        <img
      [src]="imageurl"/>
    <table>
      <tr>
        <td [attr.colspan]="colspan">&nbsp;</td>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
    </table>    `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  groen = 'green';

  isActive = true;

  borderthickness = 3;

  colspan = 3;


  imageurl = 'http://lorempixel.com/400/200';

  title = 'app';
}
