import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './likecounter.component.html',
  styleUrls: ['./likecounter.component.css']
})
export class LikecounterComponent{

  @Input('likesCount')
  likesCount: number;

  @Input('isActive')
  isActive: boolean;

  @Output()
  heartclick = new EventEmitter();

  onClick() {
    this.heartclick.emit(!this.isActive);
  }

}
