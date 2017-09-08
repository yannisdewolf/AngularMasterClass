import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {



  followers: any[];

  constructor(private githubService: GithubService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe(paramMap => {
        const id = paramMap.get('id');
        console.log('query parameter id: ' + id);
      }
    );

    this.route.queryParamMap
      .subscribe(paramMap => {
        const page = paramMap.get('page');
        console.log('query parameter page: ' + page);
      }
    );

    this.githubService.getAll().subscribe(data => {
      console.log(data);
      return this.followers = data;
    });
  }

}
