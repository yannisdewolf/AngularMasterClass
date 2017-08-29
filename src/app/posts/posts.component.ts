import {Component} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

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

  updatePost(post: any) {
    // update few properties instead of full object
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response);
      });

    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post: any) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }
}
