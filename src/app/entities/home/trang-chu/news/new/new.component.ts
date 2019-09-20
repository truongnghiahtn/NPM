import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { News } from 'src/app/common/models/news';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  biendem: number = 1;
  bienbtn: number;
  DSTinTuc: any = [
  ]
  sublistnew = new Subscription()
  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getlistnew();
  }
  xemthem() {
    this.biendem++;
  }

  getlistnew() {
    this.sublistnew = this.dataService.get('/api/new_tin_tuc').subscribe((data: News[]) => {
      this.DSTinTuc = data;
      this.bienbtn = (this.DSTinTuc.length) / 8;
    }, (err) => {
      console.log(err);
    })
  }
  ngOnDestroy() {
    this.sublistnew.unsubscribe();
  }
}

