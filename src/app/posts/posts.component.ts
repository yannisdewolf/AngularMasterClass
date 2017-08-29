import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];


  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(resp => {
        this.posts = resp.json();
      });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log('response after post ', response.json());
      }
    );
  }

  updatePost(post: any) {
    // update few properties instead of full object
    this.service.markAsRead(post)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts[index]['isRead'] = true;
      });

    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post: any) {
    this.service.deletePost(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
