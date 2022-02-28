import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { JounralComponent } from './jounral/jounral.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JmtBlogComponent } from './jmt-blog/jmt-blog.component';
import { DayOneComponent } from './day-one/day-one.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'work', component: ResumeComponent},
  {path: 'journal', 
   loadChildren: './jounral/journal.module#JournalModule'},
  //{path: 'journal/jmt', component: JounralComponent},
 // {path: 'journal/jmt/day1', component: JounralComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
