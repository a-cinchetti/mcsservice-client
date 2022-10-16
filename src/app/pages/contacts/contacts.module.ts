import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
