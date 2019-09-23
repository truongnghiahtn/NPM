import { Component } from '@angular/core';
import * as $ from "jquery";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MnpMovie';

  constructor(private spinner: NgxSpinnerService) {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  ngOnInit() {

  }

}
