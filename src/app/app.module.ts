import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUbaMemberComponent } from './admin-uba-member/admin-uba-member.component';
import { VillageProblemComponent } from './village-problem/village-problem.component';
import { EventsComponent } from './events/events.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { MembersComponent } from './members/members.component';
import { AdminGallaryComponent } from './admin-gallary/admin-gallary.component';
import { SendSolutionComponent } from './send-solution/send-solution.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    GallaryComponent,
    ContactUsComponent,
    AdminDashboardComponent,
    AdminUbaMemberComponent,
    VillageProblemComponent,
    EventsComponent,
    ForgetPasswordComponent,
    ConfirmPasswordComponent,
    MembersComponent,
    AdminGallaryComponent,
    SendSolutionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    DataTablesModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'header', component: HeaderComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'about', component: AboutComponent },
      { path: 'gallary', component: GallaryComponent },
      { path: 'conatct-us', component: ContactUsComponent },
      { path: 'dash', component: AdminDashboardComponent },
      { path: 'uba-member', component: AdminUbaMemberComponent },
      { path: 'village-problem', component: VillageProblemComponent },
      { path: 'events', component: EventsComponent },
      { path: 'forgetPassword', component: ForgetPasswordComponent },
      { path: 'confirmPassword', component: ConfirmPasswordComponent },
      { path: 'members', component: MembersComponent },
      { path: 'admin-gallary', component: AdminGallaryComponent },
      { path: 'send-solution', component: SendSolutionComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
