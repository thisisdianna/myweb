import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-jounral',
  templateUrl: './jounral.component.html',
  styleUrls: ['./jounral.component.css']
})
export class JounralComponent implements OnInit {

  blog = {};
  isJMT:boolean = false;

  constructor(private congif: ConfigService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  
  }

  getBlog(){
    return this.congif.getConfig().blog;
  }

  public btnClick(type: any): void {
    if(type == "jmt"){
      //this.router.navigate(['jmt'], {relativeTo: this.route});
      this.isJMT = true;
    }
    if(type == "day1"){
      this.router.navigate(['jmt/day',1], {relativeTo: this.route});
    }
    
  }

}
