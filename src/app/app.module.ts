import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { AppointmentReasonComponent } from './appointment-reason/appointment-reason.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentCoursesComponent,
    AppointmentReasonComponent,
    ConfirmationComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
