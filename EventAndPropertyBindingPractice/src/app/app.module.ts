import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { GradeEvaluatorComponent } from './grade-evaluator/grade-evaluator.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    GradeEvaluatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
