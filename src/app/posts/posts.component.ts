import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input-error';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  form: FormGroup;

  posts: any[];

  errorOccured: boolean;

  constructor(private service: PostService, fb: FormBuilder) {
    this.form = fb.group( {
      postTitle: ['', [Validators.required, Validators.minLength(5)]]
    });

  }


  get postTitle() {
    return this.form.get('postTitle');
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

    this.persist(post);


  }

  submitThePost() {

    console.log(this.form.get('postTitle').value);

    const post = {title: this.form.value.postTitle };

    this.persist(post);

  }

  private persist(post) {
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
          console.log('response after post ', response.json());
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            console.log('bad input: ', error.originalError);
            this.form.setErrors(error.originalError); //set errors on form
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
        (error: AppError) => {
          if (error instanceof NotFoundError) {
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
