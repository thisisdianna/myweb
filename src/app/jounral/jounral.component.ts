import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jounral',
  templateUrl: './jounral.component.html',
  styleUrls: ['./jounral.component.css']
})
export class JounralComponent implements OnInit {

  blog = {};


  constructor(private congif: ConfigService, private route: Router) { }


  public btnClick(): void {
    this.route.navigate(['/jmt']);
  }
  ngOnInit(): void {

  
  }

  getBlog(){
    return this.congif.getConfig().blog;
  }

}
