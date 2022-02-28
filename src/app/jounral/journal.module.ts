import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JounralComponent} from './jounral.component';
import { Routes, RouterModule } from '@angular/router';

import { JournalRoutingModule } from './journal/journal-routing.module';
import { AboutComponent } from '../about/about.component';
import { DayOneComponent } from '../day-one/day-one.component';

const routes: Routes = [
  {path: '',component : JounralComponent},
  {path: 'jmt',component : JounralComponent},
  {path: 'jmt/day/:id', component: DayOneComponent}

]

@NgModule({
  declarations: [
    JounralComponent
    ],
  imports: [
    CommonModule,
    JournalRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class JournalModule { }
