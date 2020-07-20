import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './page/contacts.component';
import {LayoutsModule} from '../../layouts/layouts.module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule
  ]
})
export class ContactsModule { }
