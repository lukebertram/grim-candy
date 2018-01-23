import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameStartComponent } from './game-start/game-start.component';
import { SceneDisplayComponent } from './scene-display/scene-display.component';
import { GameOverComponent } from './game-over/game-over.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    GameStartComponent,
    SceneDisplayComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
