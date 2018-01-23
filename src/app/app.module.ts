import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameStartComponent } from './game-start/game-start.component';
import { SceneDisplayComponent } from './scene-display/scene-display.component';


@NgModule({
  declarations: [
    AppComponent,
    GameStartComponent,
    SceneDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
