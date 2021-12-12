import {Component, Input, OnInit} from '@angular/core';
import {FlyService} from "./services/fly.service";
import {DuckTypeImages} from "./types/duck.-types";
import {QuackService} from "./services/quack-service";

@Component({
  selector: 'app-duck',
  templateUrl: './duck.component.html',
  styleUrls: ['./duck.component.css']
})

export class DuckComponent implements OnInit {
  @Input() duckType: string = '';
  @Input() flyBehavior: string = '';
  @Input() quackBehavior: string = '';

  public duckTypeImages = DuckTypeImages ;

  constructor(
    private flyService: FlyService,
    private quackService: QuackService
  ) {}

  ngOnInit(): void {
    this.fly(this.flyBehavior);
    this.quack(this.quackBehavior)
  }

  fly(flyBehavior: string) {
    this.flyService.fly(flyBehavior);
  }
  quack(quackBehavior: string) {
    this.quackService.quack(quackBehavior);
  }
}
