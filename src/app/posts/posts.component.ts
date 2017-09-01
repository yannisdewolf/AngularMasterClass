import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  errorOccured: boolean;

  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.errorOccured = false;
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        },
        error => {
          this.errorOccured = true;
        });
  }

  createPost(input: HTMLInputElement) {
    const post = {title: input.value};
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
          console.log('response after post ', response.json());
        },
        (error: Response) => {
          if(error.status === 400) {
            //this.form.setErrors(error.json()); //set errors on form
          } else {
            console.log('error occured', error);
          }
        }
      );
  }

  updatePost(post: any) {
    // update few properties instead of full object
    this.service.markAsRead(post)
      .subscribe(
        response => {
          const index = this.posts.indexOf(post);
          this.posts[index]['isRead'] = true;
        },
        error => {
          console.log('error occured', error)
        });

  }

  deletePost(post: any) {
    //this.service.deletePost(post.id)
    this.service.deletePost(345)
      .subscribe(
        response => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if(error.status === 404) {
            alert('This post has already been deleted');
          } else {
            this.errorOccured = true;
            console.log(error);
          }
        });
  }

  dismissError() {
    this.errorOccured = false;
  }
}
