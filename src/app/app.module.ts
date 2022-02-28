import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppUiModule } from './app-ui.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { JounralComponent } from './jounral/jounral.component';
import { ConfigService } from './config.service';
import { JmtBlogComponent } from './jmt-blog/jmt-blog.component';
import { DayOneComponent } from './day-one/day-one.component';
import { JournalModule } from './jounral/journal.module'
import { ShowPostComponent } from './show-post/show-post.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { ContactDialogComponent } from './contact-dialog/contact-dialog/contact-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    ResumeComponent,
    AboutComponent,
    HeaderComponent,
    SidenavComponent,
    //JounralComponent,
    // JmtBlogComponent,
    // DayOneComponent,
    ShowPostComponent,
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JournalModule,
    BrowserAnimationsModule,
    AppUiModule,
    HttpClientModule,
    PdfViewerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule

    ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
