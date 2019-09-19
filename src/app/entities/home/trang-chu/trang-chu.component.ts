import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-trang-chu",
  templateUrl: "./trang-chu.component.html",
  styleUrls: ["./trang-chu.component.scss"]
})
export class TrangChuComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }
  loading: boolean = false;
  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.loading = true;
    }, 1000);
  }

}
