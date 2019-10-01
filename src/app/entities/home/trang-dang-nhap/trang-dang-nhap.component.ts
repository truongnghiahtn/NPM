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
  link: any = "";
  constructor(
    private dataSV: DataService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private sharingDataService: SharingDataService
  ) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.sharingDataService.shareURL.subscribe(data => {
      this.link = data;
    });
  }

  _handleOnSignIn(formLogin) {
    const uri =
      "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    this.dataSV.post(uri, formLogin.value).subscribe(
      (data: any) => {
        let URL = this.link.slice(21, this.link.length);
        console.log(URL);
        this.router.navigate([URL]);
        localStorage.setItem("KhachHang", JSON.stringify(data));
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
