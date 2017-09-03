import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input-error';

@Injectable()
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
  }

  getPosts(): Observable<any> {
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(post))
      .catch(this.handleError);
  }

  markAsRead(post: any): Observable<any> {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error.json()));
    }
    return Observable.throw(new AppError(error.json()));
  }
}
