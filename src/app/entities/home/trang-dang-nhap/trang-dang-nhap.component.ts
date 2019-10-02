import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataService } from "src/app/shared/services/data.service";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { SharingDataService } from "src/app/shared/share/sharing-data.service";

@Component({
  selector: "app-trang-dang-nhap",
  templateUrl: "./trang-dang-nhap.component.html",
  styleUrls: ["./trang-dang-nhap.component.scss"]
})
export class TrangDangNhapComponent implements OnInit {
  @ViewChild("formLogin", { static: false }) formLogin: NgForm;
  constructor(
    private dataSV: DataService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private shareInfo: SharingDataService
  ) {}

  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  _handleOnSignIn(formLogin) {
    const uri =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    this.dataSV.post(uri, formLogin.value).subscribe(
      (data: any) => {
        localStorage.setItem("KhachHang", JSON.stringify(data));
        console.log(data);
        this.shareInfo.sharingDataHoTen(data);

        this.router.navigate([""]);
      },
      err => {
        console.log(err);
      }
    );
  }
  dangKy() {
    this.router.navigate(["dang-ky"]);
  }
  @HostListener("window:beforeunload", ["$event"])
  canDeactivate($event): boolean {
    return this.formLogin.submitted || !this.formLogin.dirty;
  }
}
