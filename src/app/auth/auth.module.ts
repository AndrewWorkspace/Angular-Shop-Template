import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//FireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AuthInterceptorService } from '../shared/services/auth-interceptor.service';






@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class AuthModule { }
