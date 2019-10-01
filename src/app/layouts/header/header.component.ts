import { Component, OnInit } from "@angular/core";
import { SharingDataService } from "src/app/shared/share/sharing-data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private sharingDataService: SharingDataService) {}

  ngOnInit() {}
  test() {
    console.log(window.location.href);
    this.sharingDataService.sharingURL(window.location.href);
  }
}
