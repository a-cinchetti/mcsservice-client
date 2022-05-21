import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxCarouselComponent } from './box-carousel.component';
import {SwiperModule} from "swiper/angular";



@NgModule({
  declarations: [
    BoxCarouselComponent
  ],
  exports: [
    BoxCarouselComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class BoxCarouselModule { }
