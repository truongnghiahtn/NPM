import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private detailMovie = new BehaviorSubject({} as Object);
  private statusChair = new BehaviorSubject({} as Object);
  private statusLC = new BehaviorSubject({} as Object);
  private statusCR = new BehaviorSubject({} as Object);
  private statusTT = new BehaviorSubject({} as Object);
  private dangnhap = new BehaviorSubject({} as Object);

  shareDetailMovie = this.detailMovie.asObservable();
  shareStatusChair = this.statusChair.asObservable();
  shareLocal=this.dangnhap.asObservable();
  shareLichChieu = this.statusLC.asObservable();
  shareCumRap = this.statusCR.asObservable();
  shareTinTuc = this.statusTT.asObservable();
  constructor() { }

  sharingDataDetailMovie(movie) {
    this.detailMovie.next(movie);
  }

  sharingDataStatusChair(status, ghe) {
    this.statusChair.next({ status, ghe });
  }

  shareDataLichChieu(event) {
    this.statusLC.next(event);
  }

  shareDataCumRap(event) {
    this.statusCR.next(event);
  }
  shareDataTinTuc(event) {
    this.statusTT.next(event);
  }
  sharingDataHoTen(info){
    this.dangnhap.next(info);
  }

  destroyData() {
    this.statusChair.next({});
  }
}
