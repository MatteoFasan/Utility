import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasseReducer } from './tutorial.reducer';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CreateStudentComponent } from './create-student.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      ClasseReducer
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    CommonModule
  ],
  declarations: [CreateStudentComponent],
  exports: [
    CreateStudentComponent
  ]
})
export class TutorialModule { }
