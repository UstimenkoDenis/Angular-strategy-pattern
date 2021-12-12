import {Inject, Injectable} from "@angular/core";
import {QuackBehavior} from "../behaviors/quack-behavior/quack-behavior";

@Injectable()
export  class QuackService {
  constructor(@Inject(QuackBehavior) private behaviors: Array<QuackBehavior>) {
  }
  quack(quackBehavior: string) {
    const behavior = this.behaviors.find((strategy) => {
      return strategy.support(quackBehavior);
    } )
    if (behavior === undefined) {
      return null;
    }
    return behavior.quack();
  }
}
