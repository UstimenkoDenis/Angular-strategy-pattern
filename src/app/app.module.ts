import {FactoryProvider, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DuckComponent } from './duck/duck.component';
import {FlyBehavior} from "./duck/behaviors/fly-behavior/fly-behavior";
import {FlyService} from "./duck/fly.service";
import {FastFlyBehavior} from "./duck/behaviors/fly-behavior/fast-fly-behavior";
import {NoFlyBehavior} from "./duck/behaviors/fly-behavior/no-fly-behavior";

export function flyServiceFactory(...behaviors: Array<FlyBehavior>): FlyService {
  return new FlyService(behaviors);
}

const FLY_PROVIDER: FactoryProvider = {
  provide: FlyService,
  useFactory: flyServiceFactory,
  deps: [
    FastFlyBehavior,
    NoFlyBehavior
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
    FastFlyBehavior,
    NoFlyBehavior,
    FLY_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
