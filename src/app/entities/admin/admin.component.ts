import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  constructor(private dataSV: DataService, private router: Router) {}

  ngOnInit() {}
  _handleOnSignIn(formSignIn) {
    const uri =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    this.dataSV.post(uri, formSignIn).subscribe(
      (data: any) => {
        if (data.maLoaiNguoiDung === "QuanTri") {
          this.router.navigate(["admin/dashboard"]);
          localStorage.setItem("admin", JSON.stringify(data));
        } else {
          alert("User không có quyền truy cập vào trang này");
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
