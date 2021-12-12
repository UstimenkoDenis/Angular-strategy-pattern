import {FlyBehavior} from "./fly-behavior";

export class FastFlyBehavior extends FlyBehavior{
  private static SUPPORTED_BEHAVIOR = ['fast'];

  support(flyBehavior: string): boolean {
    return FastFlyBehavior.SUPPORTED_BEHAVIOR.indexOf(flyBehavior) !== -1;
  }

  fly(): void {
    console.log('I am flying!!!');
  }
}
