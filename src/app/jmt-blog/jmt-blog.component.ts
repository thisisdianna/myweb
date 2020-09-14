import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jmt-blog',
  templateUrl: './jmt-blog.component.html',
  styleUrls: ['./jmt-blog.component.css']
})
export class JmtBlogComponent implements OnInit {

  constructor(private congif: ConfigService, private route: Router) { }

  public btnClick(): void {
    this.route.navigate(['/day1']);
  }

  ngOnInit(): void {
  }

  getBlog(){
    return this.congif.getConfig().blog;
  }

}
