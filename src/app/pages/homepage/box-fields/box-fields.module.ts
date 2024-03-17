import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoxFieldsComponent} from "./box-fields.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [BoxFieldsComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    BoxFieldsComponent
  ]
})
export class BoxFieldsModule {
}
