import { Component, OnInit } from '@angular/core';
import { DanhSachVeDat } from 'src/app/common/models/danh-sach-ve-dat';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';
import { VeVM } from 'src/app/common/models/ve-vm';
declare var $: any;

@Component({
  selector: 'app-trang-dat-ve',
  templateUrl: './trang-dat-ve.component.html',
  styleUrls: ['./trang-dat-ve.component.scss']
})
export class TrangDatVeComponent implements OnInit {
  statusModal: boolean = false;
  timeChecked = 0;
  maLichChieu: any;
  maPhim: any;

  phongVe: any;
  chiTietPhim: any;
  lichChieu: any;
  heThongRap: any;

  eventGhe: any = [];

  soGheDaDat: number = 0;
  tongTien: number = 0;
  tienGhe: number = 0;
  tienCombo: number = 0;
  danhSachGheDaDat: Array<any> = [];

  danhSachVeDat: DanhSachVeDat = {
    maLichChieu: null, danhSachVe: [], taiKhoanNguoiDung: null
  };

  subStatusChair = new Subscription();

  danhSachCombo = [
    { tenCombo: "Trái Cây Sấy 20gr", gia: 15000, hinhAnh: "./assets/img/traicaysay.png", amount: 0 },
    { tenCombo: "Rong Biển Cuộn 20gram", gia: 29000, hinhAnh: "./assets/img/rongbiencuon.png", amount: 0 },
    { tenCombo: "Khoai Tây Lay's Stax", gia: 59000, hinhAnh: "./assets/img/khoaitay.png", amount: 0 },
    { tenCombo: "Kẹo Snickers", gia: 29000, hinhAnh: "./assets/img/keosnickers.png", amount: 0 },
    { tenCombo: "Kẹo MnM", gia: 25000, hinhAnh: "./assets/img/keoMnM.png", amount: 0 },
    { tenCombo: "Bánh Que Snack Thái", gia: 20000, hinhAnh: "./assets/img/banhthai.png", amount: 0 },
  ]

  constructor(private _activatedRoute: ActivatedRoute,
    private _dataService: DataService,
    private _sharingData: SharingDataService) { }

  ngOnInit() {
    this._getParamsFromUrl();
    this._layChiTietPhim();
    this._layDanhSachGhe();
    this.subStatusChair = this._sharingData.shareStatusChair.subscribe((data: any) => {
      this.eventGhe = data;
      if (this.eventGhe.status) {
        this.soGheDaDat++;

        let veVM: VeVM = {
          maGhe: this.eventGhe.ghe.maGhe,
          giaVe: this.eventGhe.ghe.giaVe
        }

        this.danhSachVeDat.danhSachVe.push(veVM);

        this.danhSachGheDaDat.push(this.eventGhe.ghe);

        this.tienGhe += this.eventGhe.ghe.giaVe;
        this.tongTien += this.eventGhe.ghe.giaVe;
        console.log(this.danhSachVeDat);
      }
      else {
        if (this.eventGhe.ghe) {
          this.soGheDaDat--;

          this.danhSachVeDat.danhSachVe.splice(this.danhSachVeDat.danhSachVe.findIndex(item => {
            return item.maGhe === this.eventGhe.ghe.maGhe;
          }), 1);
          console.log(this.danhSachVeDat.danhSachVe);
          this.danhSachGheDaDat.splice(this.danhSachGheDaDat.findIndex(item => {
            return item.maGhe === this.eventGhe.ghe.maGhe;
          }), 1);

          this.tienGhe -= this.eventGhe.ghe.giaVe;
          this.tongTien -= this.eventGhe.ghe.giaVe;
        }
      }
    })
  }

  datVe() {
    let nguoiDungHienTai = JSON.parse(localStorage.getItem("nguoiDungDangNhap"));
    console.log(nguoiDungHienTai);
    if (nguoiDungHienTai) {
      if (this.soGheDaDat > 0) {
        this.danhSachVeDat.taiKhoanNguoiDung = nguoiDungHienTai.taiKhoan;
        console.log(this.danhSachVeDat.taiKhoanNguoiDung);
        console.log(this.danhSachVeDat);
        const uri = `QuanLyDatVe/DatVe`;
        this._dataService.post(uri, this.danhSachVeDat).subscribe(
          (data: any) => {
            console.log(data);
            // location.reload();
          },
          (err: any) => {
            console.log(err);
            $(".success__buyticket").css("display", "block");
          })
      } else {
        alert("Vui lòng chọn ghế!");
        
        return false;
      }
    }
    else {
      alert("Vui lòng đăng nhập để đặt vé!");
      return false;
    }
  }

  _getParamsFromUrl() {
    this.maLichChieu = this._activatedRoute.snapshot.paramMap.get("id");
    this._activatedRoute.queryParams.subscribe(
      (params: any) => {
        this.maPhim = params.movieId;
      }
    )
    this.danhSachVeDat.maLichChieu = parseFloat(this.maLichChieu);
  }

  _layDanhSachGhe() {
    this._dataService.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.maLichChieu}`).subscribe(
      (data: any) => {
        this.phongVe = data;
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  _layChiTietPhim() {
    this._dataService.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`).subscribe(
      (data: any) => {
        this.chiTietPhim = data;
        data.lichChieu.map(item => {
          if (item.maLichChieu == this.maLichChieu)
            this.lichChieu = item;
        })
        console.log(this.lichChieu);
        this._dataService.get(`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${this.lichChieu.thongTinRap.maHeThongRap}`).subscribe(
          (data: any) => {
            data.map(item => {
              this.heThongRap = item;
            })
            console.log(this.heThongRap);
          },
          (err: any) => {
            console.log(err);
          }
        )
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  handleEvent(event) {
    console.log(event);
    if (event.left === 0) {
      $(".reset__ticker").css("display", "block");
    }
  }

  down(item) {
    item.amount -= 1;
    this.tienCombo -= item.gia;
    this.tongTien -= item.gia;
  }

  up(item) {
    item.amount += 1;
    this.tienCombo += item.gia;
    this.tongTien += item.gia;
  }

  datVeLai() {
    location.reload();
  }

  datVeSuccess(){
    location.reload();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }

  chonCombo() {
    this.timeChecked += 1;
    console.log(this.timeChecked);
    if (this.timeChecked === 1) {
      $(".combo__Checkout").removeClass("slideOutRight").addClass("slideInRight animated");
      this.statusModal = true;
      this.timeChecked = -1;
    }
    else if (this.timeChecked === 0) {
      $(".combo__Checkout").removeClass("slideInRight").addClass("slideOutRight");
      this.statusModal = false;
    }
  }

  backPage() {
    $(".combo__Checkout").removeClass("slideInRight").addClass("slideOutRight");
    this.statusModal = false;
    this.timeChecked = 0;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._sharingData.destroyData();
    this.danhSachGheDaDat.length = 0;
    this.subStatusChair.unsubscribe();
    console.log("ngOnDestroy");
  }
}
