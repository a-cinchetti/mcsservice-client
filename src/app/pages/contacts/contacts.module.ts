import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from './contacts.component';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {MapModule} from "./map/map.module";


@NgModule({
  declarations: [
    ContactsComponent,
    ContactsListComponent
  ],
  imports: [
    CommonModule,
    MapModule
  ]
})
export class ContactsModule { }
