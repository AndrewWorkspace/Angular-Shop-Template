import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './page/about.component';
import {LayoutsModule} from '../../layouts/layouts.module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
  ], 
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule,
  ]
})
export class AboutModule { }
