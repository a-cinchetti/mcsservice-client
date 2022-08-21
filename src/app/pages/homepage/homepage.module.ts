import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {BoxFieldsModule} from "./box-fields/box-fields.module";
import { BoxFieldsComponent } from './box-fields/box-fields.component';
import {BoxCarouselModule} from "./box-carousel/box-carousel.module";
import {BoxPartnersModule} from "./box-partners/box-partners.module";



@NgModule({
  declarations: [HomepageComponent],
  exports: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    BoxFieldsModule,
    BoxCarouselModule,
    BoxPartnersModule,
  ]
})
export class HomepageModule { }
