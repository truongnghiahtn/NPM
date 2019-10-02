import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';

@Component({
  selector: 'app-item-lichchieu',
  templateUrl: './item-lichchieu.component.html',
  styleUrls: ['./item-lichchieu.component.scss']
})
export class ItemLichchieuComponent implements OnInit {
  @Input() thongTinHeThongRap;
  eventSelect: string = "2019-01-01";
  lichChieuPhim: any = [];
  groups: any;
  constructor(private dataService: DataService,
    private sharingData: SharingDataService) { }

  ngOnInit() {
    this.sharingData.shareDetailMovie.subscribe((data: string) => {
      if (typeof data !== 'object') {
        this.eventSelect = data;
      }
    });

  }

  ngOnChanges() {
    this.layThongTinCumRap();
  }

  layThongTinCumRap() {
    const uriCR = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.thongTinHeThongRap.maHeThongRap}`;

    this.dataService.get(uriCR).subscribe(
      (data: any) => {
        data.map(cumR => {
          this.thongTinHeThongRap.cumRapChieu.map(cumRapChieu => {
            if (cumR.maCumRap === cumRapChieu.maCumRap) {
              cumRapChieu.lichChieuPhim.map(lichChieuPhim => {
                lichChieuPhim["tenCumRap"] = cumRapChieu.tenCumRap;
                lichChieuPhim["diaChi"] = cumR.diaChi;
                this.lichChieuPhim.push(lichChieuPhim);
              })
            }
          })
        })
        this.layLichChieuPhim();
      })
  }

  layLichChieuPhim() {
    this.lichChieuPhim = this.lichChieuPhim.reduce((a, item) => {
      a[item.ngayChieuGioChieu.slice(0, 10)] = a[item.ngayChieuGioChieu.slice(0, 10)] || [];
      a[item.ngayChieuGioChieu.slice(0, 10)].push(item);
      return a;
    }, {})
    this.groups = Object.keys(this.lichChieuPhim).map(key => {
      return { day: key, lichChieu: this.lichChieuPhim[key] };
    });
  }

}
