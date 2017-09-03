import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input-error';

@Injectable()
export class DataService {

  constructor(private http: Http, private url: string) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  create(resource: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(resource))
      .catch(this.handleError);
  }

  update(resource: any): Observable<any> {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  delete(id: number): Observable<any> {
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
