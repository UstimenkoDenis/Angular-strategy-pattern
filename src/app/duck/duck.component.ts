import {Component, Input, OnInit} from '@angular/core';
import {FlyService} from "./fly.service";
import {DuckTypeImages} from "./types/duck.-types";

@Component({
  selector: 'app-duck',
  templateUrl: './duck.component.html',
  styleUrls: ['./duck.component.css']
})

export class DuckComponent implements OnInit {
  @Input() flyBehavior: string = '';
  @Input() duckType: string = '';
  public duckTypeImages = DuckTypeImages ;

  constructor(private flyService: FlyService) { }

  ngOnInit(): void {
    this.fly(this.flyBehavior);
  }

  fly(flyBehavior: string) {
    this.flyService.fly(flyBehavior);
  }
}
