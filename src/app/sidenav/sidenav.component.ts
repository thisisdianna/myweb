import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }
  public isMenuOpen: boolean = false;

  getMenuValue(){
    return this.isMenuOpen;
  }

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }


  ngOnInit(): void {
  }

}
