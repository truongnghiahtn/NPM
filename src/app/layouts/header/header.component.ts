import { Component, OnInit } from '@angular/core';
import { SharingDataService } from 'src/app/shared/share/sharing-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sharingData: SharingDataService) { }
  
  ngOnInit() {
    this.layinfodangnhap();
    this.sharingData.shareLocal.subscribe((data:any) =>{
        this.layinfodangnhap()
    })
  }

  info:any;
  status:boolean=false;
  layinfodangnhap() {
    if (localStorage.getItem("KhachHang")) {
      this.info = JSON.parse(localStorage.getItem("KhachHang"));
      console.log(this.info)
      this.status=true;
    }
    else{
      this.status=false;
    }
  }
  dangxuat(){
    localStorage.removeItem("KhachHang");
    this.layinfodangnhap();
    console.log(this.status);
  }
}
