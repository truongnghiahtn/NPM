import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit {
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getIdFromUrl();
    this.layChiTietPhim();
  }
  getIdFromUrl() {
    // this.activatedRoute.queryParams.subscribe((params:any) => {
    //   console.log(params.maPhim);
    // })
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
  }
  layChiTietPhim(){
    this.dataService.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.id}`).subscribe(
      (data)=>{
        console.log(data);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
