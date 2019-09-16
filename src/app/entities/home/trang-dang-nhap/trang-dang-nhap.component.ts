import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trang-dang-nhap',
  templateUrl: './trang-dang-nhap.component.html',
  styleUrls: ['./trang-dang-nhap.component.scss']
})
export class TrangDangNhapComponent implements OnInit {

  @ViewChild("formLogin", { static: false }) formLogin: NgForm;
  constructor(
    private dataSV: DataService,
    private router : Router,
    ) { }

  ngOnInit() {
  }
  _handleOnSignIn(formLogin) {
    const uri = 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    this.dataSV.post(uri, formLogin.value).subscribe(
      (data: any) => {
        this.router.navigate([""]);
        localStorage.setItem("KhachHang",JSON.stringify(formLogin.value));
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  @HostListener("window:beforeunload", ["$event"])
  canDeactivate($event): boolean {
    return this.formLogin.submitted || !this.formLogin.dirty;
  }
  dangKy(){
    this.router.navigate(["dang-ky"]);
    console.log("a");
  }
}
