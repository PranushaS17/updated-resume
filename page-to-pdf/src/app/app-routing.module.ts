import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { AnotherResumeComponent } from './another-resume/another-resume.component';

const routes: Routes = [
  {
    path: 'resume-1',
    component: MyResumeComponent,
  },
  {
    path: 'resume-2',
    component: AnotherResumeComponent,
  },
  {
    path: '',
    redirectTo: 'resume-1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
