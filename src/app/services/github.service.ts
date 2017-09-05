import {DataService} from './data.service';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class GithubService extends DataService {

  constructor(http: Http) {
    super(http, 'https://api.github.com/users/mosh-hamedani/followers');
  }

}
