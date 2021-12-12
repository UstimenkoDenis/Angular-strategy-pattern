import {FactoryProvider, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DuckComponent } from './duck/duck.component';
import {FlyBehavior} from "./duck/behaviors/fly-behavior/fly-behavior";
import {FlyService} from "./duck/services/fly.service";
import {FastFly} from "./duck/behaviors/fly-behavior/fast-fly";
import {NoFly} from "./duck/behaviors/fly-behavior/no-fly";
import {QuackService} from "./duck/services/quack-service";
import {Quack} from "./duck/behaviors/quack-behavior/quack";
import {MuteQuack} from "./duck/behaviors/quack-behavior/mute-quack";
import {QuackBehavior} from "./duck/behaviors/quack-behavior/quack-behavior";

/**
 *  Фабрика создания FlyService
 * @param behaviors
 */
export function flyServiceFactory(...behaviors: Array<FlyBehavior>): FlyService {
  return new FlyService(behaviors);
}

/**
 *  Фабрика создания QuackService
 * @param behaviors
 */
export function quackServiceFactory(...behaviors: Array<QuackBehavior>): QuackService {
  return new QuackService(behaviors);
}

/**
 * FlyService может быть FastFly или NoFly
 */
const FLY_PROVIDER: FactoryProvider = {
  provide: FlyService,
  useFactory: flyServiceFactory,
  deps: [
    FastFly,
    NoFly
  ]
}
/**
 * QuackService может быть Quack или MuteQuack
 */
const QUACK_PROVIDER: FactoryProvider = {
  provide: QuackService,
  useFactory: quackServiceFactory,
  deps: [
    Quack,
    MuteQuack
  ]
}

@NgModule({
  declarations: [
    AppComponent,
    DuckComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FastFly,
    NoFly,
    FLY_PROVIDER,
    Quack,
    MuteQuack,
    QUACK_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
