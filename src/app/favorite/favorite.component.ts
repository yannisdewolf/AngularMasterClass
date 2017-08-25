import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {


  @Output()
  change = new EventEmitter();

  @Input('isFavorite')
  isSelected ;

  constructor() {
  }

  ngOnInit() {
  }


  switchIcon() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected});
  }

}

export interface FavoriteChangeEventArgs {
  newValue: boolean;
}
