import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoxFieldsComponent} from "./box-fields.component";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [BoxFieldsComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        TranslateModule
    ],
  exports: [
    BoxFieldsComponent
  ]
})
export class BoxFieldsModule {
}
