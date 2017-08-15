import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <i [ngClass]="{'fa':true, 'fa-star-o': !fullIcon, 'fa-star': fullIcon }" aria-hidden='true'
       (click)='switchIcon()'></i>
    
    <i class='fa' [class.fa-star-o]="!fullIcon" [class.fa-star]="fullIcon" aria-hidden='true'
       (click)='switchIcon()'></i>

  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fullIcon = true;

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna tortor,' +
    ' auctor ut nibh a, lobortis ullamcorper lorem. Vivamus vel vulputate nunc. Mauris eu tortor ' +
    'libero. Proin faucibus nunc in erat lacinia ultrices. Mauris eleifend nunc sit amet accumsan condimentum. ' +
    'Sed hendrerit lacus quis nulla lobortis, a posuere magna maximus. Nulla bibendum dignissim massa, quis pulvinar ' +
    'sem eleifend et.';


  switchIcon() {
    this.fullIcon = !this.fullIcon;
  }
}


