import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-lichchieu',
  templateUrl: './lichchieu.component.html',
  styleUrls: ['./lichchieu.component.scss']
})
export class LichchieuComponent implements OnInit {
  @Input() maPhim;
  thongTinLichChieuPhim: Array<any> = [];
  maHeThongRap: any;
  thongTinHeThongRap: Array<any> = [];
  thongTinCumRap: Array<any> = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.layThongTinLichChieuPhim();
  }

  layThongTinLichChieuPhim() {
    const uri = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.maPhim}`;
    this.dataService.get(uri).subscribe(
      (data: any) => {
        this.thongTinLichChieuPhim = data;
        data.heThongRapChieu.map(item => {
          const uriHTR = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${item.maHeThongRap}`;
          this.dataService.get(uriHTR).subscribe(
            (data: any) => {
              data.map(item => {
                this.thongTinHeThongRap.push(item);
              })
            }
          )
        })
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

}
