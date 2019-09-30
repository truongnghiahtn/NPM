import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-now-play-item',
  templateUrl: './now-play-item.component.html',
  styleUrls: ['./now-play-item.component.scss']
})
export class NowPlayItemComponent implements OnInit {
  @Input() phim;


  constructor(private router: Router) { }



  ngOnInit() {

  }
  chiTiet() {
    this.router.navigate(['/chi-tiet-phim/', this.phim.maPhim], { queryParams: { tenPhim: this.phim.tenPhim } });
    console.log(this.phim.maPhim);
  }


  ngAfterViewInit() {
    $('.video-venobox').venobox();
  }

}
