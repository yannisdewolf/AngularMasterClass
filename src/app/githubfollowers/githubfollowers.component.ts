import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {

  followers: any[];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getAll().subscribe(data => {
      console.log(data);
      return this.followers = data;
    });
  }

}
