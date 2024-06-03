import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './super/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
// import { AuthGuard } from 'src/guards/auth.guard';
import { PatientListComponent } from './patient-list/patient-list.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component:  AdminComponent },
  { path: 'Plist', component: PatientListComponent },
  { path: 'doctor', component: DoctorComponent },

  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard],
  //   data: { expectedRole: '3' } 
  // },
   {
    path: 'form',
    component: PatientFormComponent},
  
  // {
  //   path: 'form',
  //   component: PatientFormComponent,
  //   canActivate: [AuthGuard],
  //   data: { expectedRole: '1' }
  // },
  // {
  //   path: 'doctor',
  //   component: DoctorComponent,
  //   canActivate: [AuthGuard],
  //   data: { expectedRole: '2' }
  // },
  // { path: '**', redirectTo: '' }
  // { path: 'admin', loadChildren: () => import('./super/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
