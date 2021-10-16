import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentReasonComponent } from './appointment-reason/appointment-reason.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

const routes: Routes = [
  {
    path:'' , component: LoginComponent
  },
  {
    path:'login' , component: LoginComponent
  },
  {
    path:'student-courses' , component: StudentCoursesComponent
  },
  {
    path:'appointment-reason' , component: AppointmentReasonComponent
  },
  {
    path:'confirmation' , component: ConfirmationComponent
  },
  {
    path:'suggestions' , component: SuggestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
