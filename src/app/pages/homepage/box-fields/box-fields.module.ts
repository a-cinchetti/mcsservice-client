import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoxFieldsComponent} from "./box-fields.component";


@NgModule({
  declarations: [BoxFieldsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BoxFieldsComponent
  ]
})
export class BoxFieldsModule {
}
