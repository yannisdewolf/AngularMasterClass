import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {



  @Input('isFavorite')
  isSelected ;
  @Output('change')
  click = new EventEmitter();

  switchIcon() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected});
  }

}

export interface FavoriteChangeEventArgs {
  newValue: boolean;
}
