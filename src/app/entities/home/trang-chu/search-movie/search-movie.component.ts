import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.scss"]
})
export class SearchMovieComponent implements OnInit {
  movie: any;
  rap: any;
  ngay: any;
  gio: any;
  constructor(private router: Router) {}
  ngOnInit() {}
  ngAfterViewInit() {}
  chonPhim(event) {
    console.log(event);
    this.movie = event.value;
  }
  chonRap(event) {
    console.log(event);
    this.rap = event;
  }
  chonNgay(event) {
    this.ngay = event;
  }
  chonGio(event) {
    this.gio = event;
  }
  datVe() {
    this.router.navigate(["/dat-ve/"]);
  }
}
