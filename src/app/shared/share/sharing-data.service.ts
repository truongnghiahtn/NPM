import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharingDataService {
  private detailMovie = new BehaviorSubject({} as Object);
  private statusChair = new BehaviorSubject({} as Object);
  private URL = new BehaviorSubject({} as Object);

  shareDetailMovie = this.detailMovie.asObservable();
  shareStatusChair = this.statusChair.asObservable();
  shareURL = this.URL.asObservable();
  constructor() {}

  sharingDataDetailMovie(movie) {
    this.detailMovie.next(movie);
  }

  sharingDataStatusChair(status, ghe) {
    this.statusChair.next({ status, ghe });
  }
  destroyData() {
    this.statusChair.next({});
  }
  sharingURL(url) {
    this.URL.next(url);
  }
}
