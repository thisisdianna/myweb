import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  

  public isMenuOpen: boolean = false;

  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
  

  ngOnInit(): void {
  }

}
