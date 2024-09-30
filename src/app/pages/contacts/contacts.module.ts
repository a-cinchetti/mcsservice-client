import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from './contacts.component';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {MapModule} from "./map/map.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    ContactsComponent,
    ContactsListComponent
  ],
    imports: [
        CommonModule,
        MapModule,
        TranslateModule
    ]
})
export class ContactsModule { }
