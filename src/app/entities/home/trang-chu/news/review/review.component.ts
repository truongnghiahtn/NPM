import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  biendem:number=1;
  bienbtn:number;
DSTinTuc:any=[{id:"1",name:"Chuyện Ngày Xưa Ở... Hollywood - Chuyện tình 'lãng mạn' đặc biệt của Quentin Taratino",content:"Lấy bối cảnh là thời kỳ hoàng kim của Hollywood, sự kết hợp lần đầu của hai lão làng Brad Pitt và Leonardo Dicaprio và dựa trên bi kịch đau lòng của nhà Polanski, bộ phim có đủ các nguyên liệu để trở thành sản phẩm điện ảnh xuất ",Img:"assets/img_tintuc-review/review1.jpg" },
{id:"2",name:"Angry Birds 2 - Dàn 'chim-lợn' đã trở lại và lợi hại gấp trăm lần",content:"Sau 3 năm vắng bóng màn ảnh rộng, dàn “chim lợn” của The Angry Birds Movie đã trở lại với một phần phim còn hài hước và lầy lội hơn gấp trăm lần.",Img:"assets/img_tintuc-review/review2.jpg" },
{id:"3",name:"Thưa Mẹ Con Đi - Tình yêu không có lỗi, lỗi tại tư tưởng mà thôi!",content:"Cá sấu vừa xong thì giờ đến cá mập tấn công phòng vé..",Img:"assets/img_tintuc-review/review3.jpg" },
{id:"4",name:"Hobbs & Shaw - Đừng gọi Hobbs & Shaw là phim đua xe nữa mà hãy gọi là phim siêu anh hùng",content:"Dàn diễn viên “trai xinh, gái đẹp”, hành động mãn nhãn bất chấp mọi quy luật vật lý, những màn châm chọc cười ra nước mắt chính là những gì dùng để  ",Img:"assets/img_tintuc-review/review4.jpg" },
{id:"5",name:"The Lion King - Tấm vé trở lại tuổi thơ của các thế hệ khán giả từng yêu thích Disney",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-review/review5.jpg" },
{id:"6",name:"Spider-Man: Far From Home - Màn tái xuất hài hước và đầy 'cú lừa' của Nhện 'nhí'",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-review/review6.jpg" },
{id:"7",name:"Annabelle: Ác Quỷ Trở Về - 'Chị Beo' đã trở lại và lợi hại hơn gấp trăm lần",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-review/review7.jpg" },
{id:"8",name:"Ký Sinh Trùng - Đỉnh cao của điện ảnh Hàn Quốc ",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-review/review8.jpg" },
{id:"9",name:"Toy Story 4 - Cả bầu trời kí ức tuổi thơ bỗng chốc thu bé lại bằng một bộ phim",content:"Gắn bó với tuổi thơ của hàng triệu thế hệ khán giả trên thế giới, Toy Story đã trở lại với một chuyến phiêu lưu mới và những bài học ý nghĩa cũ không phai nhòa theo năm tháng.",Img:"assets/img_tintuc-review/review9.jpg" },
{id:"10",name:"Men in Black: International - Chán bảo vệ Asgard, Thor cùng Valkyrie 'quẩy tưng' tổ chức áo đen",content:"Tuy không quá xuất sắc nhưng Men in Black: International vẫn giữ được cái chất hài hước đặc trưng của thương hiệu nhờ sự kết hợp của Tessa Thompson và Chris Hemsworth.",Img:"assets/img_tintuc-review/review10.jpg" },
{id:"11",name:"Godzilla: King of the Monsters - Kong có thể là Vua nhưng Godzilla thì là “Chúa”",content:"Bom tấn mới nhất của vũ trụ quái vật mang tên Godzilla: King of the Monsters đủ sức khiến fanboy nín thở trong rạp bởi vô số trận đánh mãn nhãn.",Img:"assets/img_tintuc-review/review11.jpg" },



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


