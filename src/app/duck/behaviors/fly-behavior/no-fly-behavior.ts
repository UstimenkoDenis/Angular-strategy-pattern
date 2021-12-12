import {FlyBehavior} from "./fly-behavior";

export class NoFlyBehavior extends FlyBehavior {
  private static SUPPORTED_BEHAVIOR = ['no'];

  support(flyBehavior: string): boolean {
    return NoFlyBehavior.SUPPORTED_BEHAVIOR.indexOf(flyBehavior) !== -1;
  }

  fly(): void {
    console.log('I am not flying!!!');
  }
}
