export abstract class QuackBehavior {
  /**
   *
   * @param quackBehavior
   */
  abstract support(quackBehavior: string): boolean;
  /**
   *
   */
  abstract quack(): void;
}
