import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataService } from "src/app/shared/services/data.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

@Component({
  selector: "app-trang-dang-ky",
  templateUrl: "./trang-dang-ky.component.html",
  styleUrls: ["./trang-dang-ky.component.scss"]
})
export class TrangDangKyComponent implements OnInit {
  dangnhap:any;
  @ViewChild("formSignUp", { static: false }) formSignUp: NgForm;
  constructor(
    private router: Router,
    private dataService: DataService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  _handleOnSubmit(user) {
    const uri = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    this.dataService
      .post(uri, {
        ...user,
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang"
      })
      .subscribe(
        data => {
          
          // this.router.navigate([""])
          this.dangnhap=true;
        },
        err => {
          console.log(err);
        }
      );
  }
  @HostListener("window:beforeunload", ["$event"])
  canDeactivate($event): boolean {
    return this.formSignUp.submitted || !this.formSignUp.dirty;
  }
  close(){
    this.dangnhap=false;

  }
  chuyentrang(){
    this.dangnhap=false;
     this.router.navigate([""]);
  }
}
