import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit

 

{
  biendem:number=1;
  bienbtn:number;
DSTinTuc:any=[{id:"1",name:"Bạn còn nhớ hay đã quên nhóm bạn Losers' Club đối đầu với hề Pennywise?",content:"27 năm sau, liệu họ có đủ 'mạnh' diệt It một lần và mãi mãi?",Img:"assets/img_tintuc-new/new1.jpg" },
{id:"2",name:"Sony và Disney 'chia tay đòi Spider-Man' - Ai là người chịu thiệt?",content:"Cuối cùng thì đại diện Sony cũng chính thức lên tiếng và xác nhận Spider-Man không còn ở MCU (Vũ trụ Điện ảnh Marvel) nữa. Nhưng ai là người chịu thiệt thòi hơn trong màn “chia tay thế kỉ” này?",Img:"assets/img_tintuc-new/new2.jpg" },
{id:"3",name:"Quái vật biển sâu trở lại trong Hung Thần Đại Dương: Thảm Sát",content:"Cá sấu vừa xong thì giờ đến cá mập tấn công phòng vé..",Img:"assets/img_tintuc-new/new3.jpg" },
{id:"4",name:"3 lý do khiến bạn khó lòng bỏ qua siêu phẩm kinh dị, giật gân Địa Đạo Cá Sấu Tử Thần",content:"Với sự kết hợp giữa thảm hoạ và sức mạnh của thiên nhiên, phim sẽ khiến ban phải đặt vé ra rạp ngay đấy.",Img:"assets/img_tintuc-new/new4.jpg" },
{id:"5",name:"Conan và những phần phim gây sốt trên màn ảnh rộng Việt Nam",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-new/new5.jpg" },
{id:"6",name:"Khám phá tính cách đáng yêu của 5 học trò nhí trong Anh Thầy Ngôi Sao",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-new/new6.jpg" },
{id:"7",name:"Thưa Mẹ Con Đi giản dị nhưng lôi cuốn và còn gợi nhắc cả Call Me by Your Name và Love, Simon",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-new/new7.jpg" },
{id:"8",name:"Dù chưa ra mắt nhưng Cậu Chủ Ma Cà Rồng đã ủ mưu sản xuất phần tiếp theo??",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-new/new8.jpg" },
{id:"9",name:"Bom tấn gần 500,000 lượt xem chính thức đổ bộ phòng chiếu Việt Nam!",content:"Thảm hoạ khí ga Hàn Quốc liệu có làm mưa làm gió tại đất Việt?",Img:"assets/img_tintuc-new/new9.jpg" },
{id:"10",name:"Mỹ nhân nào sẽ xuất hiện trong cuộc chiến của 2 anh 'đầu bóng loáng'?",content:"Những bộ phim trong 'vũ trụ' Fast & Furious thì không thể thiếu dàn chân dài tuyệt sắc đúng không nào?",Img:"assets/img_tintuc-new/new10.jpg" },
{id:"11",name:"Trước Crawl, những hiểm hoạ cá sấu nào đáng xem nhất trên màn bạc điện ảnh?",content:"Chủ đề 'cá sấu ăn thịt' tuy đã quá quen thuộc với khán giả nhưng mỗi lần nhắc đến một trong những tác phẩm sau, hẳn ai cũng sẽ nổi da gà vì khoảnh khắc đáng sợ.",Img:"assets/img_tintuc-new/new11.jpg" },
{id:"12",name:"100% cà chua tươi, Ký Sinh Trùng xứng đáng là bộ phim hay nhất của Bong Joon Ho",content:"Thắng giải Cành Cọ Vàng, tác phẩm nhận được tràng pháo tay dài tận 8 phút tại liên hoan phim quốc tế.",Img:"assets/img_tintuc-new/new12.jpg" },
{id:"13",name:"Người tuyết Yeti chưa bao giờ dễ thương như thế trong Everest: Người Tuyết Bé Nhỏ",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-new/new13.jpg" },
{id:"14",name:"Godzilla và những điều bạn chưa biết (P2)",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-new/new14.jpg" },
{id:"15",name:" 4 cái tên nào sẽ mang đến bất ngờ cho khán giả 'nhí' vào nửa cuối năm 2019?",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-new/new15.jpg" },
{id:"16",name:"'Cô nàng cử tạ' sẽ làm gì để ngăn chặn nạn phát tán clip 'nóng' trong Phi Vụ Nữ Quyền?",content:"4sdfsdfasdfadfsdfsdfsdfsdfsdfasdfsdfasdfasd",Img:"assets/img_tintuc-new/new16.jpg" },
{id:"17",name:"Godzilla và những điều bạn chưa biết (P1)",content:"Trước khi đại chiến diễn ra, cùng tìm hiểu mọi thông tin về Godzilla nào.",Img:"assets/img_tintuc-new/new17.jpg" },
{id:"18",name:"Siêu anh hùng Shazam ra mắt trailer mới cực ‘lầy’ ",content:"Anh chàng “mặt phụ huynh, hồn học sinh” của nhà DC đã trở lại.",Img:"assets/img_tintuc-new/new18 .jpg" },

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

