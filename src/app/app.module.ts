import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContentComponent } from './content/content.component';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
//import { AuthContentComponent } from './auth-content/auth-content.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';

import { HomePagePatientComponent } from './home-page-patient/home-page-patient.component';
import { HomePageProfessionalComponent } from './home-page-professional/home-page-professional.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentPatientComponent } from './content-patient/content-patient.component';
import { ContentProfessionalComponent } from './content-professional/content-professional.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewReportComponent } from './new-report/new-report.component';

@NgModule({
  declarations: [
    AppComponent,
    //WelcomeContentComponent,
    LoginFormComponent,
    ContentComponent,
    //AuthContentComponent,
    HomePagePatientComponent,
    HomePageProfessionalComponent,
    SidenavComponent,
    ContentPatientComponent,
    ContentProfessionalComponent,
    EditProfileComponent,
    NewReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
