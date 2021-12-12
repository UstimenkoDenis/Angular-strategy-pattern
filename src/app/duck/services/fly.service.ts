import {Inject, Injectable} from "@angular/core";
import {FlyBehavior} from "../behaviors/fly-behavior/fly-behavior";

@Injectable()
export class FlyService {
  constructor(@Inject(FlyBehavior) private behaviors: Array<FlyBehavior>) {
  }
  fly(flyBehavior: string) {
    const behavior = this.behaviors.find((strategy) => {
      return strategy.support(flyBehavior);
    } )
    if (behavior === undefined) {
      return null;
    }
    return behavior.fly();
  }
}
