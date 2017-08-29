import { Component, OnInit } from '@angular/core';
import {RequestOptions, Headers, Http} from '@angular/http';

@Component({
  selector: 'app-imgur',
  templateUrl: './imgur.component.html',
  styleUrls: ['./imgur.component.css']
})
export class ImgurComponent implements OnInit {

  answer: any [];

  private secret = '7b42edbf8293cda';


  private headers: Headers = new Headers({ 'Authorization': 'CLIENT-ID ' + this.secret });
  private options: RequestOptions = new RequestOptions({
    headers: this.headers
  });

  constructor(private http: Http) {
    this.searchCategory('nsfw');
  }


  searchCategory(category: string) {
    this.http.get('https://api.imgur.com/3/gallery/r/' + category,
      this.options
    ).subscribe(
      resp => {
        this.answer = resp.json().data;
        console.log(this.answer);
      }
    );
  }

  search(category: HTMLInputElement) {
    this.searchCategory(category.value);
  }

  ngOnInit() {
  }

}
