import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {BoxFieldsModule} from "./box-fields/box-fields.module";
import { BoxFieldsComponent } from './box-fields/box-fields.component';
import {BoxCarouselModule} from "./box-carousel/box-carousel.module";
import {BoxFeedbackModule} from "./box-feedback/box-feedback.module";



@NgModule({
  declarations: [HomepageComponent],
  exports: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    BoxFieldsModule,
    BoxCarouselModule,
    BoxFeedbackModule,
  ]
})
export class HomepageModule { }
