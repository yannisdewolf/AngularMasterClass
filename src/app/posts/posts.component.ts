import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {AppError} from '../common/app-error';
import {BadInput} from '../common/bad-input-error';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {NotFoundError} from '../common/not-found-error';

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
    this.form = fb.group({
      postTitle: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get postTitle() {
    return this.form.get('postTitle');
  }

  ngOnInit(): void {
    this.errorOccured = false;
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  submitThePost(form: NgForm) {

    console.log('form: ', form);

    console.log('submitting the post with value: ' + this.form.get('postTitle').value);

    const post = {title: this.form.value.postTitle};

    if (this.form.get('postTitle').valid) {
      this.postTitle.setValue('');
      this.persist(post);
    } else {
      console.log('form is not valid');
    }

  }

  updatePost(post: any) {
    // update few properties instead of full object
    this.service.update(post)
      .subscribe(
        updatedPost => {
          const index = this.posts.indexOf(post);
          this.posts[index]['isRead'] = true;
        });

  }

  deletePost(post: any) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
    //this.service.delete(345)
      .subscribe(
        () => {},
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else {
            throw error;
          }
        });
  }

  dismissError() {
    this.errorOccured = false;
  }

  private persist(post) {
    this.posts.splice(0, 0, post);
    this.service.create(post)
      .subscribe(
        createdPost => {
          post['id'] = createdPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);
          if (error instanceof BadInput) {
            console.log('bad input: ', error.originalError);
            this.form.setErrors(error.originalError); //set errors on form
          } else {
            throw error;
          }
        }
      );
  }


}
