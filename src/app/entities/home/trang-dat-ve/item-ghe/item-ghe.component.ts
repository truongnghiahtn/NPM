import { Component, OnInit, Input } from '@angular/core';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  trangThaiChon: boolean = false;
  @Input() Ghe;

  constructor(private sharingDataService: SharingDataService) { }

  ngOnInit() {
  }

  datGhe(){
    this.trangThaiChon = !this.trangThaiChon;
    this.sharingDataService.sharingDataStatusChair(this.trangThaiChon, this.Ghe);
  }
}
