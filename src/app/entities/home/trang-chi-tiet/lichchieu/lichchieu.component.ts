import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';

@Component({
  selector: 'app-lichchieu',
  templateUrl: './lichchieu.component.html',
  styleUrls: ['./lichchieu.component.scss']
})
export class LichchieuComponent implements OnInit {
  @Input() maPhim;
  thongTinLichChieuPhim: Array<any> = [];
  thongTinHeThongRap: Array<any> = [];
  index: number = 0;
  DayOfWeek = [{ day: "Thứ 2", date: "2019-01-01" }, { day: "Thứ 3", date: "2019-01-02" }, { day: "Thứ 4", date: "2019-01-03" }, { day: "Thứ 5", date: "2019-01-04" }, { day: "Thứ 6", date: "2019-01-05" }, { day: "Thứ 7", date: "2019-01-06" }, { day: "Chủ nhật", date: "2019-01-07" }, { day: "Thứ 2", date: "2019-01-08" }, { day: "Thứ 3", date: "2019-01-09" }, { day: "Thứ 4", date: "2019-01-10" }]

  constructor(private dataService: DataService,
    private sharingData: SharingDataService) { }

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
        data.heThongRapChieu.map((item) => {
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

  selectDay(day, index) {
    this.sharingData.sharingDataDetailMovie(day);
    this.index = index;
  }
}
