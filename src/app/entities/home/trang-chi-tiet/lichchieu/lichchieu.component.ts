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
  thongTinHeThongRap: Array<any> = [];
  eventSelectDay: any = "2019-01-01";
  maHeThongRap: any;

  DayOfWeek = [{ day: "Thứ 2", date: "2019-01-01" }, { day: "Thứ 3", date: "2019-01-02" }, { day: "Thứ 4", date: "2019-01-03" }, { day: "Thứ 5", date: "2019-01-04" }, { day: "Thứ 6", date: "2019-01-05" }, { day: "Thứ 7", date: "2019-01-06" }]

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
        data.heThongRapChieu.map((item, index) => {
          const uriHTR = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${item.maHeThongRap}`;
          this.dataService.get(uriHTR).subscribe(
            (data: any) => {
              data.map(item => {
                this.thongTinHeThongRap.push(item);
              })
            }
          )
          if (index === 0) this.maHeThongRap = item.maHeThongRap;
        })
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
  /* 
    MaHeThongRap(maHeThongRap) {
      this.maHeThongRap = maHeThongRap;
    }
   */
  selectDay(day) {
    this.eventSelectDay = day;
  }

}
