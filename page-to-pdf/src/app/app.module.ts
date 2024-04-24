import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnotherResumeComponent } from './another-resume/another-resume.component';
import { AppRoutingModule } from './app-routing.module';
import { MyResumeComponent } from './my-resume/my-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    AnotherResumeComponent,
    MyResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
