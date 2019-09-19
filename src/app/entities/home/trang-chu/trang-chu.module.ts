import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TrangChuRoutingModule } from "./trang-chu-routing.module";
import { TrangChuComponent } from "./trang-chu.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CarouselItemPhimComponent } from "./carousel/carousel-item-phim/carousel-item-phim.component";
import { CarouselItemDetailComponent } from "./carousel/carousel-item-detail/carousel-item-detail.component";
import { SearchMovieComponent } from "./search-movie/search-movie.component";
import { MoviesComponent } from "./movies/movies.component";
import { NowPlayingComponent } from "./movies/now-playing/now-playing.component";
import { CommingSoonComponent } from "./movies/comming-soon/comming-soon.component";
import { NowPlayItemComponent } from "./movies/now-playing/now-play-item/now-play-item.component";
import { CommingSoonitemComponent } from "./movies/comming-soon/comming-soonitem/comming-soonitem.component";
import { CinemaComplexComponent } from "./cinema-complex/cinema-complex.component";
import { ParentListCinemasComponent } from "./cinema-complex/parent-list-cinemas/parent-list-cinemas.component";
import { ListCinemasComponent } from "./cinema-complex/list-cinemas/list-cinemas.component";
import { ListMoviesComponent } from "./cinema-complex/list-movies/list-movies.component";
import { NewsComponent } from "./news/news.component";
import { NewComponent } from "./news/new/new.component";
import { ReviewComponent } from "./news/review/review.component";
import { PromotionComponent } from "./news/promotion/promotion.component";
import { NewsItem1Component } from "./news/news-item1/news-item1.component";
import { NewsItem2Component } from "./news/news-item2/news-item2.component";
import { MaterialModule } from "./../../../common/material/material.module";
import { MovieTimerComponent } from './cinema-complex/movie-timer/movie-timer.component';

@NgModule({
  declarations: [
    TrangChuComponent,
    CarouselComponent,
    CarouselItemPhimComponent,
    CarouselItemDetailComponent,
    SearchMovieComponent,
    MoviesComponent,
    NowPlayingComponent,
    CommingSoonComponent,
    NowPlayItemComponent,
    CommingSoonitemComponent,
    CinemaComplexComponent,
    ParentListCinemasComponent,
    ListCinemasComponent,
    ListMoviesComponent,
    NewsComponent,
    NewComponent,
    ReviewComponent,
    PromotionComponent,
    NewsItem1Component,
    NewsItem2Component,
    MovieTimerComponent
  ],
  imports: [CommonModule, TrangChuRoutingModule, MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrangChuModule { }
