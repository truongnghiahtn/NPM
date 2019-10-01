import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private detailMovie = new BehaviorSubject({} as Object);
  private statusChair = new BehaviorSubject({} as Object);
  private dangnhap = new BehaviorSubject({} as Object);

  shareDetailMovie = this.detailMovie.asObservable();
  shareStatusChair = this.statusChair.asObservable();
  shareLocal=this.dangnhap.asObservable();

  constructor() { }

  sharingDataDetailMovie(movie){
    this.detailMovie.next(movie);
  }

  sharingDataStatusChair(status, ghe){
    this.statusChair.next({status, ghe});
  }
  sharingDataHoTen(info){
    this.dangnhap.next(info);
  }

  destroyData(){
    this.statusChair.next({});
  }
}
