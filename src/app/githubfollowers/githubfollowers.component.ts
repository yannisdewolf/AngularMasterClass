import {Component, OnInit} from '@angular/core';
import {GithubService} from '../services/github.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {


  followers: any[];

  constructor(private githubService: GithubService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combinedParamMapArray => {
      const id = combinedParamMapArray[0].get('id');
      const page = combinedParamMapArray[1].get('page');

      //this.githubService.getAll({id: id, page: page});
      return this.githubService.getAll();
    })
    .subscribe(followers => {
      this.followers = followers;
    });

  }

}
