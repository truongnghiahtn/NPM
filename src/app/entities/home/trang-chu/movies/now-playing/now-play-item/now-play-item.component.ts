import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-now-play-item',
  templateUrl: './now-play-item.component.html',
  styleUrls: ['./now-play-item.component.scss']
})
export class NowPlayItemComponent implements OnInit {
  @Input() phim;


  constructor(private router:Router) { }

 

  ngOnInit() {
 
  }
   chiTiet(){
    this.router.navigate(['/chi-tiet-phim',this.phim.maPhim],{queryParams:{tenphim:this.phim.tenPhim}});
    console.log(this.phim.maPhim);
  }

}
