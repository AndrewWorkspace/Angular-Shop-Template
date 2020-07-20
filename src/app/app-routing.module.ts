import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from './modules/home/page/home.component';
import { AboutComponent } from './modules/about/page/about.component';
import { AboutModule } from './modules/about/about.module';
import { ContactsComponent } from './modules/contacts/page/contacts.component'
import { ContactsModule } from './modules/contacts/contacts.module';
import { AuthModule } from './auth/auth.module'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent, canActivate: [AuthGuard]
  },
  {
    path: 'contacts',
    component: ContactsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    AboutModule,
    ContactsModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
