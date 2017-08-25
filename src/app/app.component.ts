import { Component } from '@angular/core';
import {FavoriteChangeEventArgs} from "./favorite/favorite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post = {
    title: "Title",
    isFavorite: true
  }

  titel = '';


  sayhello(eventArgs: FavoriteChangeEventArgs) {
    console.log('favorite change: ' , eventArgs.newValue);
  }
}


