import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';
import { News } from 'src/app/common/models/news';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  biendem:number=1;
  bienbtn:number;
  DSTinTuc:any=[
  ]
  sublistreview= new Subscription();
  constructor(
    private dataservice :DataService,
    private router: Router
  ) { }
xemthem(){
    this.biendem++;
}

  

  ngOnInit() {
    this.getlistreview();
  }

getlistreview(){
  this.sublistreview=this.dataservice.get('http://5d6a41476b97ef00145b77b6.mockapi.io/api/new_review').subscribe((data:News)=>{
    this.DSTinTuc=data;
    this.bienbtn=(this.DSTinTuc.length)/8;
  },(err)=>{
    console.log(err);
  })
}
ngOnDestroy(){
  this.sublistreview.unsubscribe();
}

}


