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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import{ReactiveFormsModule} from '@angular/forms'
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import {MatListModule} from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
    FlexLayoutModule,
    MatSidenavModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
