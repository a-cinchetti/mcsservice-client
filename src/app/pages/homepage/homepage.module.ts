import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage.component";
import {BoxFieldsModule} from "./box-fields/box-fields.module";
import {BoxCarouselModule} from "./box-carousel/box-carousel.module";
import {BoxPartnersModule} from "./box-partners/box-partners.module";
import {InlineSVGModule} from "ng-inline-svg-2";
import { BoxDescriptionComponent } from './box-description/box-description.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [HomepageComponent, BoxDescriptionComponent],
  exports: [
    HomepageComponent,
  ],
    imports: [
        CommonModule,
        BoxFieldsModule,
        BoxCarouselModule,
        BoxPartnersModule,
        InlineSVGModule,
        MatButtonModule,
    ]
})
export class HomepageModule { }
