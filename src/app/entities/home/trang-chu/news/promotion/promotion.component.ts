import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';
import { News } from 'src/app/common/models/news';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {

  biendem: number = 1;
  bienbtn: number;
  DSTinTuc: any = [];
  sublistpromotion = new Subscription()
  constructor(private dataService: DataService,
    private router: Router) { }
  xemthem() {
    this.biendem++;
  }



  ngOnInit() {
    this.getlistpromotion();
  }
  getlistpromotion() {
    this.sublistpromotion = this.dataService.get('/api/new_promotion').subscribe((data: News[]) => {
      this.DSTinTuc = data;
      this.bienbtn = (this.DSTinTuc.length) / 8;
    }, (err) => {
      console.log(err);
    })
  }
  ngOnDestroy() {
    this.sublistpromotion.unsubscribe();
  }
}
