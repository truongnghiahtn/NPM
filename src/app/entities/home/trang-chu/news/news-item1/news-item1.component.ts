import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item1',
  templateUrl: './news-item1.component.html',
  styleUrls: ['./news-item1.component.scss']
})
export class NewsItem1Component implements OnInit {
  @Input() tintuc;
  constructor() { }

  ngOnInit() {
  }

}
