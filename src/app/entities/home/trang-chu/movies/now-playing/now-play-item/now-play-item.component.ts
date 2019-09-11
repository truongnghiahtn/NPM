import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-now-play-item',
  templateUrl: './now-play-item.component.html',
  styleUrls: ['./now-play-item.component.scss']
})
export class NowPlayItemComponent implements OnInit {
  @Input() phim;


  constructor() { }

 

  ngOnInit() {
 
  }

}
