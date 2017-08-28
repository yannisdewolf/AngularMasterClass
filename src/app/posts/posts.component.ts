import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any[];

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(resp => {
        this.posts = resp.json();
      });
  }

  createPost(input: HTMLInputElement) {
    const post  = {title: input.value};
    input.value = '';

    this.http.post(this.url, JSON.stringify(post)).subscribe(
      response => {
        post['id'] = response.json().id;
        this.posts.splice(0,0, post);
        console.log('response after post ', response.json());
      }
    );
  }

}
