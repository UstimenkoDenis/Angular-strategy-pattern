export abstract class FlyBehavior {
  /**
   *
   * @param flyBehavior
   *
   * @return boolean
   */
  abstract support(flyBehavior: string): boolean;
  /**
   *
   */
  abstract fly(): void;
}
