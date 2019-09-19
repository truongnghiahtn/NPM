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
      tenPhim: "The Hangover Part III",
      theLoai: "Drama, Thriller",
      trailer: "https://youtu.be/S-UPJyEHmM0",
      hinhAnhBG: "assets/img/slide-1.png",
      hinhAnhVideo: "assets/img/slide-1-video.png",
      hinhAnhMoTa: "assets/img/movie-10.jpg",
      moTa: "A dramatization of the April 2010 disaster, when the offshore drilling rig Deepwater Horizon exploded and created the worst oil spill in U.S. history.",
      ngayKhoiChieu: "07 September, 2017",
      danhGia: 6
    },
    {
      maPhim: 2,
      tenPhim: "X-Men: Days of Future Past",
      theLoai: "Action, Adventure, Sci-Fi",
      trailer: "https://youtu.be/S-UPJyEHmM0",
      hinhAnhBG: "assets/img/slide-2.png",
      hinhAnhVideo: "assets/img/slide-2-video.png",
      hinhAnhMoTa: "assets/img/movie-9.jpg",
      moTa: "The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants.",
      ngayKhoiChieu: "15 April, 2017",
      danhGia: 5
    },
    {
      maPhim: 3,
      tenPhim: "The Hangover: Part III",
      theLoai: "Comedy, Crime",
      trailer: "https://youtu.be/S-UPJyEHmM0",
      hinhAnhBG: "assets/img/slide-3.png",
      hinhAnhVideo: "assets/img/slide-3-video.png",
      hinhAnhMoTa: "assets/img/movie-11.jpg",
      moTa: "When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down Mr. Chow, who has escaped from prison and is on the run.",
      ngayKhoiChieu: "30 September, 2017",
      danhGia: 5
    },
    {
      maPhim: 4,
      tenPhim: "Transformers: Age of Extinction",
      theLoai: "Action, Adventure, Sci-Fi",
      trailer: "https://youtu.be/S-UPJyEHmM0",
      hinhAnhBG: "assets/img/slide-4.png",
      hinhAnhVideo: "assets/img/slide-4-video.png",
      hinhAnhMoTa: "assets/img/movie-12.jpg",
      moTa: "Autobots must escape sight from a bounty hunter who has taken control of the human serendipity: Unexpectedly, Optimus Prime and his remaining gang turn to a mechanic, his daughter, and her back street racing boyfriend for help.",
      ngayKhoiChieu: "15 April, 2018",
      danhGia: 5
    },
    {
      maPhim: 5,
      tenPhim: "End of an empire",
      theLoai: "Action, Adventure, Drama",
      trailer: "https://youtu.be/S-UPJyEHmM0",
      hinhAnhBG: "assets/img/slide-5.png",
      hinhAnhVideo: "assets/img/slide-5-video.png",
      hinhAnhMoTa: "assets/img/movie-13.jpg",
      moTa: "A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors of the devastating virus unleashed a decade earlier.",
      ngayKhoiChieu: "19 October, 2018",
      danhGia: 5
    },
    {
      maPhim: 6,
      tenPhim: "Hannibal Rising",
      theLoai: "Crime, Thriller, Drama",
      trailer: "https://youtu.be/S-UPJyEHmM0",
      hinhAnhBG: "assets/img/slide-6.png",
      hinhAnhVideo: "assets/img/slide-6-video.png",
      hinhAnhMoTa: "assets/img/movie-14.jpg",
      moTa: "After the death of his parents during World War II, young Hannibal Lecter moves in with his beautiful aunt and begins plotting revenge on the barbarians responsible for his sister's death.",
      ngayKhoiChieu: "21 November, 2018",
      danhGia: 5
    },
    {
      maPhim: 7,
      tenPhim: "Locked out",
      theLoai: "Adventure, Drama, Sci-Fi",
      trailer: "https://youtu.be/d96cjJhvlMA",
      hinhAnhBG: "assets/img/slide-7.png",
      hinhAnhVideo: "assets/img/slide-7-video.png",
      hinhAnhMoTa: "assets/img/movie-15.jpg",
      moTa: "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
      ngayKhoiChieu: "01 December, 2018",
      danhGia: 77
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
          items: 6
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
