import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-lichchieu',
  templateUrl: './item-lichchieu.component.html',
  styleUrls: ['./item-lichchieu.component.scss']
})
export class ItemLichchieuComponent implements OnInit {
  @Input() thongTinHeThongRap;
  @Input() eventSelect;
  @Input() maPhim;
  @Input() index;
  lichChieuPhim: Array<any> = [];
  groups: any;
  lich: Array<any> = [];
  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(): void {

    console.log(this.thongTinHeThongRap, this.eventSelect);
    this.layThongTinCumRap();
    this.layLichChieuPhim();
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
              })
            }
          })
        })
      }
    )
    console.log(this.thongTinHeThongRap.cumRapChieu);
  }

  layLichChieuPhim() {
    /*         this.thongTinHeThongRap.cumRapChieu.map(item => {
              this.lichChieuPhim = item.lichChieuPhim.reduce((a, item) => {
                a[item.ngayChieuGioChieu.slice(0, 10)] = a[item.ngayChieuGioChieu.slice(0, 10)] || [];
                a[item.ngayChieuGioChieu.slice(0, 10)].push(item);
                return a;
              }, {})
              console.log(this.lichChieuPhim);
              this.groups = Object.keys(this.lichChieuPhim).map(key => {
                return { day: key, date: this.lichChieuPhim };
              });
              this.lich.push(this.groups);
            })
            console.log(this.lich);  */
    this.thongTinHeThongRap.cumRapChieu.map(item => {
      item.lichChieuPhim.map(item => {
        this.lichChieuPhim.push(item);
      })
    })
    this.lichChieuPhim = this.lichChieuPhim.reduce((a, item) => {
      a[item.ngayChieuGioChieu.slice(0, 10)] = a[item.ngayChieuGioChieu.slice(0, 10)] || [];
      a[item.ngayChieuGioChieu.slice(0, 10)].push(item);
      return a;
    }, {})
    this.groups = Object.keys(this.lichChieuPhim).map(key => {
      return { day: key, date: this.lichChieuPhim[key] };
    });
    console.log(this.lichChieuPhim);
    console.log(this.groups);

  }

  datVe(maLichChieu) {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/dat-ve/', maLichChieu], { queryParams: { movieId: this.maPhim } }));

    window.open(url, '_blank');
  }

}
