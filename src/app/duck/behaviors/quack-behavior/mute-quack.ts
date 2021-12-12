import {QuackBehavior} from "./quack-behavior";

export  class MuteQuack extends QuackBehavior {
  private static SUPPORTED_BEHAVIOR = ['muteQuack'];

  support(quackBehavior: string): boolean {
    return MuteQuack.SUPPORTED_BEHAVIOR.indexOf(quackBehavior) !== -1;
  }

  quack(): void {
    console.log('I do not quack!!!');
  }
}
