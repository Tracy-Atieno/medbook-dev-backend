import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CustomDatePipe } from './custom-date.pipe';
import { HighlightRowsDirective } from './highlight-rows.directive';

@NgModule({
  declarations: [
    AppComponent,
    PatientEntryComponent,
    PatientListComponent,
    CustomDatePipe,
    HighlightRowsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
