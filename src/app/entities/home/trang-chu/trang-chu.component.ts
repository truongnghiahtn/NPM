import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import * as $ from "jquery";
@Component({
  selector: "app-trang-chu",
  templateUrl: "./trang-chu.component.html",
  styleUrls: ["./trang-chu.component.scss"]
})
export class TrangChuComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }
  loading: boolean = false;
  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.loading = true;
    }, 1000);
  }
}
