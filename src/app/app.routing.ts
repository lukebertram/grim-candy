import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameStartComponent } from './game-start/game-start.component';
import { SceneDisplayComponent } from './scene-display/scene-display.component';
import { GameOverComponent } from './game-over/game-over.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GameStartComponent
  },
  {
    path: 'scene/:id',
    component: SceneDisplayComponent
  },
  {
    path: 'gameover/:id',
    component: GameOverComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
