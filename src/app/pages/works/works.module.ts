import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorksComponent} from './works.component';
import {WorksCarouselComponent} from './works-carousel/works-carousel.component';
import {BoxCarouselModule} from "../homepage/box-carousel/box-carousel.module";
import {ImgContainerComponent} from './img-container/img-container.component';
import {SwiperModule} from "swiper/angular";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";

@NgModule({
  declarations: [
    WorksComponent,
    WorksCarouselComponent,
    ImgContainerComponent,
  ],
  imports: [
    CommonModule,
    BoxCarouselModule,
    SwiperModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    ImgContainerComponent
  ]
})
export class WorksModule { }
