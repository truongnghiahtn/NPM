import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @ViewChild('targetLichChieu', { read: ElementRef, static: false }) targetLichChieu;
  constructor(private sharingData: SharingDataService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.sharingData.shareDataLichChieu(this.targetLichChieu.nativeElement);
  }

}
