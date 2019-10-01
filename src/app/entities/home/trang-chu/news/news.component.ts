import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from './new/new.component';
import { ReviewComponent } from './review/review.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @ViewChild('targetTinTuc', { read: ElementRef, static: false }) targetTinTuc;

  constructor(private sharingData: SharingDataService) { }

  @ViewChildren(NewComponent) taglistnew: QueryList<NewComponent>
  @ViewChildren(ReviewComponent) taglistreview: QueryList<ReviewComponent>
  @ViewChildren(PromotionComponent) taglistpromotion: QueryList<PromotionComponent>
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sharingData.shareDataTinTuc(this.targetTinTuc.nativeElement);

  }
  reset() {
    this.taglistnew.map(item => {
      item.biendem = 1;
    })
    this.taglistreview.map(item => {
      item.biendem = 1;
    })
    this.taglistpromotion.map(item => {
      item.biendem = 1;
    })
  }


}
