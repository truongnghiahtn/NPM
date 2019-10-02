import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { CommingSoonitemComponent } from './comming-soonitem/comming-soonitem.component';
declare var $: any;

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.scss']
})
export class CommingSoonComponent implements OnInit {
  @ViewChildren(CommingSoonitemComponent) listPhim: QueryList<CommingSoonitemComponent>;

  active: boolean = false;
  mp: number = 1;

  DanhSachPhimSapChieu: Array<any> = [
    {
      maPhim: 1,
      tenPhim: "Everest: Người Tuyết Bé Nhỏ - Abominable",
      theLoai: "Hoạt Hình",
      trailer: "https://www.youtube.com/watch?v=gchh_Y8dwlg",
      hinhAnhBG: "assets/img/slide-1.png",
      hinhAnhVideo: "https://kenh14cdn.com/thumb_w/620/2019/9/30/photo-1-15698137646921130777097.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/09/everest-nguoi-tuyet-be-nho-abominable-15692072164957_215x318.jpg",
      moTa: "Khi cô gái tuổi teen Yi (Chloe Bennet – ngôi sao của Marvel’s Agents of S.H.I.E.L.D. thủ vai) chạm trán với một Người tuyết (Yeti) trên mái nhà của căn hộ cô sống tại Thượng Hải, cô và hội bạn tinh nghịch gồm Jin (Tenzing Norgay Trainor) và Peng (Albert Tsai) đã đặt cho nó cái tên “Everest”. Và cả hội đã cùng lên đường trên một hành trình vĩ đại...",
      ngayKhoiChieu: "10/04/2019",
      thoiLuong: "100 phút",
      danhGia: 0
    },
    {
      maPhim: 2,
      tenPhim: "Nhân Duyên: Người Yêu Tiền Kiếp",
      theLoai: "Tình cảm",
      trailer: "https://www.youtube.com/embed/1FEZGTUQ_DU?autoplay=1",
      hinhAnhBG: "assets/img/slide-2.png",
      hinhAnhVideo: "https://i.ytimg.com/vi/1FEZGTUQ_DU/maxresdefault.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/09/nhan-duyen-nguoi-yeu-tien-kiep-15683489211225_215x318.jpg",
      moTa: "Phim xoay quanh mối tình giữa Trần Nhật (Trịnh Thăng Bình) và Quỳnh Mai (Midu). Trần Nhật quyết tâm chống lại quy luật luân hồi chuyển kiếp, tình nguyện ở cạnh Mai như một chiếc bóng vô hình.",
      ngayKhoiChieu: "10/04/2019",
      thoiLuong: "100 phút",
      danhGia: 0
    },
    {
      maPhim: 3,
      tenPhim: "Ngọt Ngào Điên Dại - The Most Ordinary Romance",
      theLoai: "Tình cảm, lãng mạn",
      trailer: "https://www.youtube.com/watch?v=eJW4cv8V9vA",
      hinhAnhBG: "assets/img/slide-3.png",
      hinhAnhVideo: "https://i.ytimg.com/vi/aSTAvkfyBog/maxresdefault.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/09/ngot-ngao-dien-dai-the-most-ordinary-romance-15692222175520_215x318.jpg",
      moTa: "Câu chuyện tình thực tế nhưng cũng không kém phần đáng yêu của những con tim đã từng đớn đau, những ngã rẻ mới có đưa họ đến bên nhau khi đã trải qua quá nhiều vết thương lòng?",
      ngayKhoiChieu: "10/04/2019",
      thoiLuong: "100 phút",
      danhGia: 0
    },
    {
      maPhim: 4,
      tenPhim: "Đàn Ông Song Tử - Gemini Man",
      theLoai: "Hành động",
      trailer: "https://www.youtube.com/watch?v=tPc1c8_atkg",
      hinhAnhBG: "assets/img/slide-4.png",
      hinhAnhVideo: "https://i.ytimg.com/vi/6orc_lHvJKY/maxresdefault.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/08/dan-ong-song-tu-gemini-man-15668203492116_215x318.jpg",
      moTa: "Một bộ phim kinh dị hành động, khoa học viễn tưởng sắp ra mắt của Mỹ do Lý An đạo diễn với Will Smith thủ vai chính.",
      ngayKhoiChieu: "10/11/2019",
      thoiLuong: "100 phút",
      danhGia: 6
    },
    {
      maPhim: 5,
      tenPhim: "Thú Cưng Siêu Quậy - Trouble",
      theLoai: "Hoạt hình, hài hước, gia đình",
      trailer: "https://www.youtube.com/watch?v=idxQWXSar14",
      hinhAnhBG: "assets/img/slide-5.png",
      hinhAnhVideo: "https://i.ytimg.com/vi/idxQWXSar14/maxresdefault.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/10/thu-cung-sieu-quay-trouble-15699902683040_215x318.jpg",
      moTa: "Từ khi còn là một chú cún con, Rắc Rối đã sống một cuộc sống xa hoa trong một biệt thự lớn. Ở đó có những bữa ăn trưa với thịt bò thăn và ngủ trên những chiếc khăn lông mềm mại nhất. Nhưng sau khi ông chủ giàu có qua đời, không còn ai quan tâm đến, Rắc Rối thấy mình thật cô đơn và lạc lõng, chú quyết định sẽ bước ra khỏi vùng an toàn và khám phá thế giới bên ngoài",
      ngayKhoiChieu: "10/11/2019",
      thoiLuong: "87 phút",
      danhGia: 0
    },
    {
      maPhim: 6,
      tenPhim: "Tiên Hắc Ám 2 - Maleficent: Mistress of Evil",
      theLoai: "Kỳ ảo",
      trailer: "https://www.youtube.com/watch?v=-Ci96IlKIlQ",
      hinhAnhBG: "assets/img/slide-6.png",
      hinhAnhVideo: "https://genknews.genkcdn.vn/2019/5/14/anh-6-15578095308481022708816.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/09/tien-hac-am-2-maleficent-mistress-of-evil-15698381075963_215x318.jpg",
      moTa: "Phần phim tiếp theo của Maleficent.",
      ngayKhoiChieu: "10/18/2019",
      thoiLuong: "100 phút",
      danhGia: 0
    },
    {
      maPhim: 7,
      tenPhim: "Vùng Đất Thây Ma: Cú Bắn Đúp - Zombieland: Double Tap",
      theLoai: "Kinh dị, hành động, hài hước",
      trailer: "https://www.youtube.com/watch?v=ZlW9yhUKlkQ",
      hinhAnhBG: "assets/img/slide-7.png",
      hinhAnhVideo: "https://congngheviet.com/wp-content/uploads/2019/07/Zombieland_-Double-Tap-Poster.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/09/vung-dat-thay-ma-cu-ban-dup-zombieland-double-tap-c18-15692329823044_215x318.jpg",
      moTa: "Phần phim tiếp theo của Zombieland.",
      ngayKhoiChieu: "10/25/2019",
      thoiLuong: "100 phút",
      danhGia: 0
    },
    {
      maPhim: 8,
      tenPhim: "Bắc Kim Thang - Home Sweet Home",
      theLoai: "Tâm lý, kịch tính",
      trailer: "https://www.youtube.com/channel/UCq_28uJmbq4tlji7YAMZGtg?feature=embeds_subscribe_title",
      hinhAnhBG: "assets/img/slide-7.png",
      hinhAnhVideo: "https://image.plo.vn/w653/Uploaded/2019/xpckxpiu/2019_09_03/bac-kim-thang-plo_rkib.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/08/bac-kim-thang-c18-15668765014888_215x318.jpg",
      moTa: "Bắc Kim Thang là câu chuyện được xây dựng để phản ánh quan niệm “trọng nam khinh nữ”, một quan niệm đã và đang tồn tại trong nhận thức của người Á Đông, đặc biệt vẫn còn hiện hữu đâu đó tại những miền thôn quê Việt Nam. Không chỉ dựa vào yếu tố con người để thể hiện quan điểm này, bộ phim đã sử dụng nhân vật mang tên “Con bù nhìn” để khai thác câu chuyện ở một góc nhìn mới hơn, khác biệt và táo bạo hơn.",
      ngayKhoiChieu: "10/25/2019",
      thoiLuong: "100 phút",
      danhGia: 0
    },
    {
      maPhim: 9,
      tenPhim: "Countdown",
      theLoai: "Kinh dị",
      trailer: "https://www.youtube.com/watch?v=TZsgNH17_X4",
      hinhAnhBG: "assets/img/slide-7.png",
      hinhAnhVideo: "https://i.ytimg.com/vi/V7P1lmLc64s/maxresdefault.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/09/countdown-15692228079980_215x318.jpg",
      moTa: "Một nữ y tá trẻ đã tải về ứng dụng dự đoán cái chết đang gây xôn xao trong cộng đồng. Tuy nhiên, ứng dụng dự đoán cô chỉ còn vỏn vẹn 3 ngày để sống, trong khi đó cô cũng dần cảm nhận được một thực thể kỳ quái đang săn lùng mình.",
      ngayKhoiChieu: "10/25/2019",
      thoiLuong: "100 phút",
      danhGia: 0
    },
    {
      maPhim: 10,
      tenPhim: "Kẻ Huỷ Diệt: Vận Mệnh Đen Tối - Terminator: Dark Fate",
      theLoai: "Khoa học, viễn tưởng, hành động, phiêu lưu",
      trailer: "https://www.youtube.com/watch?v=Zw7z6O9JeYE",
      hinhAnhBG: "assets/img/slide-7.png",
      hinhAnhVideo: "https://i.ytimg.com/vi/SUfdhRJgG1o/hqdefault.jpg",
      hinhAnhMoTa: "https://s3img.vcdn.vn/mobile/123phim/2019/08/ke-huy-diet-van-menh-den-toi-terminator-dark-fate-c18-15671383731719_215x318.jpg",
      moTa: "Terminator: Dark Fate hứa hẹn là phần phim chắc chắn sẽ khiến các fan hâm mộ thỏa mãn bởi những pha hành động cực kỳ chất lượng. Cùng với đó, sự trở lại của đạo diễn James Cameron, Linda Hamilton và Arnold Schwarzenegge càng đem đến nhiều hơn sự kích thích và phấn khích. ​​​​​​​",
      ngayKhoiChieu: "11/01/2019",
      thoiLuong: "120 phút",
      danhGia: 5.5
    }
  ]

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => this.listPhim.first.status = true, 1000);
    $('.owl-carousel').owlCarousel({
      loop: false,
      dots: false,
      rewind: true,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 4
        },
        1000: {
          items: 5
        }
      }
    })
    $('.video-venobox').venobox();
  }

  show(maPhim) {
    this.listPhim.map(item => {
      item.status = false;
      if (maPhim === item.phim.maPhim) {
        item.status = true;
        this.mp = item.phim.maPhim;
      }
    })
  }
}
