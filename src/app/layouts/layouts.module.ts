import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { TextContentComponent } from './text-content/text-content.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannersComponent } from './banners/banners.component';
import { SocialListComponent } from './lists/social-list/social-list.component';
import { BackgroundModernComponent } from './backgrounds/background-modern/background-modern.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannersComponent,
    TextContentComponent,
    SocialListComponent,
    BackgroundModernComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannersComponent,
    TextContentComponent,
    RouterModule,
    BackgroundModernComponent
  ]
})
export class LayoutsModule { }
