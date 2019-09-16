import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NewComponent } from './new/new.component';
import { ReviewComponent } from './review/review.component';
import { PromotionComponent } from './promotion/promotion.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  @ViewChildren(NewComponent) taglistnew:QueryList<NewComponent>
  @ViewChildren(ReviewComponent) taglistreview:QueryList<ReviewComponent>
  @ViewChildren(PromotionComponent) taglistpromotion:QueryList<PromotionComponent>
  ngOnInit() {
  }
  reset(){
    this.taglistnew.map(item=>{
      item.biendem=1;
    })
    this.taglistreview.map(item=>{
      item.biendem=1;
    })
    this.taglistpromotion.map(item=>{
      item.biendem=1;
    })
  }


}
