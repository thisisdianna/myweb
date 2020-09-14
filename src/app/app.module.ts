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
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ConfigService } from './config.service';
import { JmtBlogComponent } from './jmt-blog/jmt-blog.component';
import { DayOneComponent } from './day-one/day-one.component';
import { ShowPostComponent } from './show-post/show-post.component';


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
    JounralComponent,
    ContactFormComponent,
    JmtBlogComponent,
    DayOneComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppUiModule,
    HttpClientModule
    ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
