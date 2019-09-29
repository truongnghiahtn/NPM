import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataService } from "src/app/shared/services/data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  @ViewChild("formSignUpAdmin", { static: false }) formSignUp: NgForm;
  animate: boolean = true;
  nguoiDung: {
    email: "";
    hoTen: "";
    matKhau: "";
    soDT: "";
    taiKhoan: "";
    maLoaiNguoiDung: "";
  };
  trangThai: boolean = true;
  constructor(private _dataService: DataService) {}

  ngOnInit() {}
  chitiet(status) {
    this.animate = status;
    console;
  }
  _handleOnSubmit() {
    const uri =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung";
    this._dataService
      .post(
        uri,
        //Spread operator
        {
          ...this.formSignUp.value,
          maNhom: "GP01",
          maLoaiNguoiDung: "KhachHang"
        }
      )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    this.formSignUp.resetForm();
  }
  _updateUser(formSignUpAdmin) {
    // console.log(formSignUpAdmin);
    const uri =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    this._dataService
      .put(uri, {
        ...formSignUpAdmin.value,
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang"
      })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

  // Take Output & push to Form
  capNhatNguoiDung(event) {
    console.log(event);
    this.nguoiDung = event;
    this.formSignUp.setValue({
      email: event.email,
      hoTen: event.hoTen,
      matKhau: event.matKhau,
      soDT: event.soDt,
      taiKhoan: event.taiKhoan
    });
    console.log(this.formSignUp);
  }
  // Take Output
  themNguoiDung(event) {
    this.formSignUp.resetForm();
    this.trangThai = event;
  }
  suaNguoiDung(event) {
    this.trangThai = event;
  }
}
