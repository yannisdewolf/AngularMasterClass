import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       {{text | summary: 60 : 'SAMENVATTING'}}
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna tortor,' +
    ' auctor ut nibh a, lobortis ullamcorper lorem. Vivamus vel vulputate nunc. Mauris eu tortor ' +
    'libero. Proin faucibus nunc in erat lacinia ultrices. Mauris eleifend nunc sit amet accumsan condimentum. ' +
    'Sed hendrerit lacus quis nulla lobortis, a posuere magna maximus. Nulla bibendum dignissim massa, quis pulvinar ' +
    'sem eleifend et.';


}


