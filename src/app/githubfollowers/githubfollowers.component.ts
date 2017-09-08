import {Component, OnInit} from '@angular/core';
import {GithubService} from '../services/github.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

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
    ]).subscribe(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');

      //this.githubService.getAll({id: id, page: page});
      this.githubService.getAll()
        .subscribe(data => {
          console.log(data);
          return this.followers = data;
        });
    });

  }

}
