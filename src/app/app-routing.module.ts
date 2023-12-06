import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePagePatientComponent } from './home-page-patient/home-page-patient.component';
import { HomePageProfessionalComponent } from './home-page-professional/home-page-professional.component';
import { ContentComponent } from './content/content.component';
import { isAuthenticatedGuard } from './is-authenticated.guard';
import { hasRoleGuard } from './has-role.guard';
import { ContentPatientComponent } from './content-patient/content-patient.component';
import { ContentProfessionalComponent } from './content-professional/content-professional.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: ContentComponent},
  {path: 'home_page_patient', component: ContentPatientComponent, canActivate: [isAuthenticatedGuard, hasRoleGuard], data: {role:'PATIENT'}},
  {path: 'home_page_professional', component: ContentProfessionalComponent, canActivate: [isAuthenticatedGuard, hasRoleGuard], data: {role:'PROFESSIONAL'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
