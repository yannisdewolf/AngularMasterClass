import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    });
  }

  ngOnInit() {


    // subscribe op route.paramMap wanneer user op zelfde pagina kan blijven
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');
        console.log('id as object from observable paramMap: ' + id);
      });

    //wanneer user op andere pagina komt, en nadien terug op deze pagina komt, kan je snapshot gebruiken:

    let id2 = this.route.snapshot.paramMap.get('id');
    console.log('id as object from snapshot: ' + id2);
  }

}
