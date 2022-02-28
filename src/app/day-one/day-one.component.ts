import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {

  entry: any = { };
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.entry = this.config.getConfig().day1
  }

}
