import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';
import { WorksCarouselComponent } from './works-carousel/works-carousel.component';
import {BoxCarouselModule} from "../homepage/box-carousel/box-carousel.module";



@NgModule({
  declarations: [
    WorksComponent,
    WorksCarouselComponent
  ],
  imports: [
    CommonModule,
    BoxCarouselModule
  ]
})
export class WorksModule { }
