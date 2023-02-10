import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoxFieldsComponent} from "./box-fields.component";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";


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
