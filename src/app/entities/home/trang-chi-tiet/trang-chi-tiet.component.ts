import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit {
  @ViewChild("formdanhgia", { static: false }) formdanhgia: NgForm
  constructor(private activatedrouter: ActivatedRoute,
    private _dataservice: DataService,
    private spinner: NgxSpinnerService) { }
  maphim: any;
  mangphim: any[];
  info: any;
  danhgia: number = 0;
  datacomment: any;
  newcomment: any;
  idxoa: any;
  idfix: any;
  mangsua: any;
  status: boolean;


  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.laymaphim();
    this.getchitiet();
    this.layinfodangnhap();
    this.getdanhgia();

  }
  laymaphim() {
    this.maphim = this.activatedrouter.snapshot.paramMap.get("id");
  }
  getchitiet() {
    this._dataservice.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.maphim}`)
      .subscribe((data: any) => {
        console.log(data);
        this.mangphim = data;

      }),
      (err) => {
        console.log(err);
      }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('.video-venobox').venobox();
    }, 500)
  }




  // cdanhgia
  reset() {
    this.danhgia = 0;
  }
  show() {
    this.status = true;
  }
  hidden() {
    this.status = false;
  }
  layinfodangnhap() {
    if (localStorage.getItem("KhachHang")) {
      this.info = JSON.parse(localStorage.getItem("KhachHang"));
    }
  }
  getdanhgia() {
    this._dataservice.get("/comment/danhgia_movie").subscribe((data => {
      this.datacomment = data;
      this.newcomment = [];
      this.datacomment.map(item => {
        if (item.name === this.maphim) {
          this.newcomment.push(item);
        }
      })

    }), (err) => {
      console.log(err);
    })
  }
  postcoment() {

    if (this.formdanhgia.valid) {
      const comments = {
        id: "",
        user: this.info.taiKhoan,
        name: this.maphim,
        comment: this.formdanhgia.value.comment,
        danhgia: this.danhgia,
      }
      this._dataservice.post("/comment/danhgia_movie", comments).subscribe((data) => {
        this.capnhat(data.id);
        this.formdanhgia.resetForm();

      }, (err) => {
        console.log(err)
      })
    }
  }
  capnhat(ID) {
    const comments = {
      id: ID,
      user: this.info.taiKhoan,
      name: this.maphim,
      comment: this.formdanhgia.value.comment,
      danhgia: this.danhgia,
    }
    this.newcomment.push(comments);
  }
  xoa(Id) {
    this._dataservice.delete(`/comment/danhgia_movie/${Id}`).subscribe((data) => {
    }, (err) => (console.log(err)))

    this.idxoa = this.newcomment.findIndex((item) => {
      return item.id === Id
    })
    this.newcomment.splice(this.idxoa, 1);

  }
  sua(id) {
    this.idfix = id;
    this.mangsua = this.newcomment.find((item) => {
      return item.id === id
    })
    this.formdanhgia.setValue({
      comment: this.mangsua.comment
    })
    this.danhgia = this.mangsua.danhgia;

  }
  fixcomment() {

    this.mangsua.comment = this.formdanhgia.value.comment;
    const commentsfix = {
      id: this.idfix,
      user: this.info.taiKhoan,
      name: this.maphim,
      comment: this.formdanhgia.value.comment,
      danhgia: this.danhgia,
    }
    this._dataservice.put(`/comment/danhgia_movie/${this.idfix}`, commentsfix).subscribe((data: any) => {

    }, (err) => {
      console.log(err)
    })



  }

  start1() {
    this.danhgia = 1;
  }
  start2() {
    this.danhgia = 2;
  }
  start3() {
    this.danhgia = 3;
  }
  start4() {
    this.danhgia = 4;
  }
  start5() {
    this.danhgia = 5;
  }
}
