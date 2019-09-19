import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-item2',
  templateUrl: './news-item2.component.html',
  styleUrls: ['./news-item2.component.scss']
})
export class NewsItem2Component implements OnInit {
  @Input() tintuc;
  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  chitiet(){
    this.router.navigate(['/chi-tiet-tin-tuc',this.tintuc.id],{queryParams:{tentintuc:this.tintuc.name, Loaitin:this.tintuc.loaitin}})
  }

}
