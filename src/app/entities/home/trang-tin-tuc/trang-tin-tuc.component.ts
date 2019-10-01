import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-trang-tin-tuc',
  templateUrl: './trang-tin-tuc.component.html',
  styleUrls: ['./trang-tin-tuc.component.scss']
})
export class TrangTinTucComponent implements OnInit {

  DSTintuc: any = [];
  DSlike: any = [];
  DSnewlike: any = [];
  id: any;
  info: any;
  tentintuc: any;
  status: boolean = false;
  statuslike: boolean;
  loaitintuc: any;
  sumlike: number = 0;
  sublisttintuc = new Subscription()
  constructor(private activaterouter: ActivatedRoute,
    private datadervice: DataService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.layloaitintuc();
    this.getintuc();
    this.layinfodangnhap();
  }

  comment(target: HTMLElement) {
    console.log(target);
    target.scrollIntoView({ behavior: 'smooth' });
  }


  layloaitintuc() {
    this.id = this.activaterouter.snapshot.paramMap.get("id");
    this.activaterouter.queryParams.subscribe((params: any) => {
      this.loaitintuc = params.Loaitin;
    })
  }
  getintuc() {
    if (this.loaitintuc === "news") {
      var uri = `/api/new_tin_tuc/${this.id}`
    }
    else {
      if (this.loaitintuc === "review") {
        var uri = `/api/new_review/${this.id}`
      }
      else {
        if (this.loaitintuc === "promotion") {
          var uri = `/api/new_promotion/${this.id}`
        }
      }
    }
    this.sublisttintuc = this.datadervice.get(uri).subscribe((data: any) => {
      this.DSTintuc = data;
      console.log(this.DSTintuc);
      this.getlike();
    }, (err) => {
      console.log(err);
    })
  }
  like() {
    if (this.info) {
      this.status = !this.status;
      if (this.status === true) {
        this.sumlike++;
      }
      else {
        this.sumlike--;
      }
    } else {
      alert("bạn cần phải đăng nhập trước !!!");
      this.router.navigate(['/dang-nhap'])
    }
  }
  layinfodangnhap() {
    if (localStorage.getItem("KhachHang")) {
      this.info = JSON.parse(localStorage.getItem("KhachHang"));
      console.log(this.info)
    }
  }
  getlike() {
    this.datadervice.get("/api/like").subscribe((data: any) => {
      this.DSnewlike = data;
      this.demlike();
      console.log("helo", this.DSnewlike);
      this.DSnewlike.find(item => {
        if (this.info) {
          if (item.name === this.info.taiKhoan && item.tentintuc === this.DSTintuc.name) {
            if (item.trangthai === true) {
              this.status = true;
              return true;
            }
            if (item.trangthai === false) {

              this.status = false;
              return true;
            }
          }
          else {
            this.status = false;
          }
        }

      })
    }, (err) => {
      console.log(err);
    })
  }
  putlike(Trangthai, iD) {
    const nguoi = {
      id: iD,
      name: this.info.taiKhoan,
      trangthai: Trangthai,
      tentintuc: this.DSTintuc.name
    }
    this.datadervice.put(`/api/like/${iD}`, nguoi).subscribe((data: any) => {
      console.log(data);
    })
  }
  postlike() {
    if (this.info) {
      const nguoi = {
        id: "",
        name: this.info.taiKhoan,
        trangthai: this.status,
        tentintuc: this.DSTintuc.name
      }
      this.DSnewlike.find(item => {
        if (item.name === this.info.taiKhoan && item.tentintuc === this.DSTintuc.name) {
          if (this.status === true) {
            this.putlike(true, item.id);
            this.statuslike = false;
            return true;
          }
          if (this.status === false) {
            this.putlike(false, item.id);
            this.statuslike = false;
            return true;
          }
        }
        else {
          this.statuslike = true;
        }
      })
      if (this.statuslike) {
        this.datadervice.post("/api/like", nguoi).subscribe(
          (data: any) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }
        )
      }
    }

  }
  demlike() {
    this.DSnewlike.find(item => {
      if (item.tentintuc === this.DSTintuc.name) {
        if (item.trangthai === true) {
          this.sumlike++;
        }

      }
    })

  }
  ngOnDestroy(): void {
    this.postlike();
  }

}


