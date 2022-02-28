import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isMenuOpen: boolean = false;

  title = 'myweb';
  src = "../../assets/resume/resume.pdf"

}
