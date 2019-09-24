import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-date-of-movies',
  templateUrl: './date-of-movies.component.html',
  styleUrls: ['./date-of-movies.component.scss']
})
export class DateOfMoviesComponent implements OnInit {
  @Input() maPhim;
  @Input() maHTR;

  DayOfWeek = [{ day: "Thứ 2", date: "2019-01-01" }, { day: "Thứ 3", date: "2019-01-02" }, { day: "Thứ 4", date: "2019-01-03" }, { day: "Thứ 5", date: "2019-01-04" }, { day: "Thứ 6", date: "2019-01-05" }, { day: "Thứ 7", date: "2019-01-06" }]
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    console.log(this.maHTR);
    this.dataService.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`).subscribe(
      (data: any) => console.log(data)
    )

  }

}
