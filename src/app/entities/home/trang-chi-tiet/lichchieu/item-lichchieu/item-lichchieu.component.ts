import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-item-lichchieu',
  templateUrl: './item-lichchieu.component.html',
  styleUrls: ['./item-lichchieu.component.scss']
})
export class ItemLichchieuComponent implements OnInit {
  @Input() thongTinHeThongRap;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.thongTinHeThongRap);
    this.layThongTinCumRap();
  }

  layThongTinCumRap() {
    const uriCR = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.thongTinHeThongRap.maHeThongRap}`;
    this.dataService.get(uriCR).subscribe(
      (data: any) => {
        data.map(cumR => {
          this.thongTinHeThongRap.cumRapChieu.map(item => {
            if (cumR.maCumRap === item.maCumRap)
              item["diaChi"] = cumR.diaChi;
          })
        })
        console.log(this.thongTinHeThongRap.cumRapChieu);
      }
    )
  }

}
