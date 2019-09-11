import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit 
{

  biendem:number=1;
  bienbtn:number;
DSTinTuc:any=[{id:"1",name:"39k/vé CineStar - Cuối Tuần Cực Đã",content:"Tận hưởng bom tấn cuối tuần với giá chỉ 39k. ",Img:"assets/img_tintuc-khuyenmai/km1.png" },
{id:"2",name:"69k/vé BHD Star - Đồng giá mỗi ngày",content:"Xem phim chill với giá chill gấp bội.",Img:"assets/img_tintuc-khuyenmai/km2.jpg" },
{id:"3",name:"Sinh Nhật Mega GS",content:"Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.",Img:"assets/img_tintuc-khuyenmai/km3.jpg" },
{id:"4",name:"[123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa",content:"Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi. ",Img:"assets/img_tintuc-khuyenmai/km4.jpg" },
{id:"5",name:"[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-khuyenmai/km5.jpg" },
{id:"6",name:"Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-khuyenmai/km6.jpg" },
{id:"7",name:"[123Phim] Bạn Là Fan Cứng Marvel?",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-khuyenmai/km7.jpg" },
{id:"8",name:"[Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui ",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-khuyenmai/km8.jpg" },

]
xemthem(){
    this.biendem++;
 console.log();
}

  constructor() { }

  ngOnInit() {
    this.dungbtn();
  }
dungbtn(){
  this.bienbtn=(this.DSTinTuc.length)/8;
  console.log(this.bienbtn);
}


}
