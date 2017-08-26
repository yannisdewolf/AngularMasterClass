import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title')
  title: string;

  showDetail: boolean;

  constructor() { }

  ngOnInit() {
  }

  switch() {
    this.showDetail = !this.showDetail;
  }

}
