import { Component } from '@angular/core';
import {FavoriteChangeEventArgs} from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tweet = {
    body: 'Here is the body of a tweet',
    isLiked: false,
    likesCount: 10
  };

  post = {
    title: 'Title',
    isFavorite: true
  };

  titel = '';


  liked(args: boolean) {
    this.tweet.isLiked = args;
    this.tweet.likesCount += args ? 1 : -1;
  }
}


