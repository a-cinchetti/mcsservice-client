import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SwiperModule} from "swiper/angular";
import {BoxCarouselMobileComponent} from "./box-carousel-mobile.component";



@NgModule({
  declarations: [
    BoxCarouselMobileComponent
  ],
  exports: [
    BoxCarouselMobileComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class BoxCarouselMobileModule { }
