import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item2',
  templateUrl: './news-item2.component.html',
  styleUrls: ['./news-item2.component.scss']
})
export class NewsItem2Component implements OnInit {
  @Input() tintuc;
  constructor() { }

  ngOnInit() {
  }

}
