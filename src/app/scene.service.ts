import { Injectable } from '@angular/core';
import { Scene } from './scene.model';
import { SCENES } from './mock-scenes';

@Injectable()
export class SceneService {

  constructor() { }

  getSceneById(sceneId: number) {
    for (var i = 0; i <= SCENES.length - 1; i++) {
      if (SCENES[i].id === sceneId) {
        return SCENES[i];
      }
    }      
  }

}
