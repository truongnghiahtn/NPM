import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
declare var $: any;

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss']
})
export class QuanLyPhimComponent implements OnInit {
  danhSachPhim: Array<any> = [];
  danhSachNhom: Array<any> = [{ maNhom: "GP01" }, { maNhom: "GP02" }, { maNhom: "GP03" }, { maNhom: "GP04" }, { maNhom: "GP05" }, { maNhom: "GP06" }, { maNhom: "GP07" }, { maNhom: "GP08" }, { maNhom: "GP09" }, { maNhom: "GP10" }]
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  selectOption(maNhom) {
    this.layDanhSachPhim(maNhom);

  }

  layDanhSachPhim(maNhom) {
    this.dataService.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`).subscribe((data: any) => {
      this.danhSachPhim = data;
    })
  }

  capNhat(Phim) {
    $('#myModal').modal({ backdrop: 'static', keyboard: false });
  }

}
