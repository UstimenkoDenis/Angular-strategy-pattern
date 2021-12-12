import {QuackBehavior} from "./quack-behavior";

export class Quack extends QuackBehavior {
  private static SUPPORTED_BEHAVIOR = ['quack'];

  support(quackBehavior: string): boolean {
    return Quack.SUPPORTED_BEHAVIOR.indexOf(quackBehavior) !== -1;
  }

  quack(): void {
    console.log('Quack!!! Quack!!!');
  }
}
