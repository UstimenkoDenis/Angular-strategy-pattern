import {FlyBehavior} from "./fly-behavior";

export class FastFly extends FlyBehavior{
  private static SUPPORTED_BEHAVIOR = ['fast'];

  support(flyBehavior: string): boolean {
    return FastFly.SUPPORTED_BEHAVIOR.indexOf(flyBehavior) !== -1;
  }

  fly(): void {
    console.log('I am flying!!!');
  }
}
