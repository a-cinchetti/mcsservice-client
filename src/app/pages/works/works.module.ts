import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';
import { WorksCarouselComponent } from './works-carousel/works-carousel.component';
import {BoxCarouselModule} from "../homepage/box-carousel/box-carousel.module";
import { ImgContainerComponent } from './img-container/img-container.component';
import {SwiperModule} from "swiper/angular";



@NgModule({
  declarations: [
    WorksComponent,
    WorksCarouselComponent,
    ImgContainerComponent,
  ],
  imports: [
    CommonModule,
    BoxCarouselModule,
    SwiperModule
  ],
  exports: [
    ImgContainerComponent
  ]
})
export class WorksModule { }
