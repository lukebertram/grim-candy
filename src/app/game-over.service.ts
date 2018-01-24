import { Injectable } from '@angular/core';
// import { Scene } from './scene.model';
import { FATES } from './fates';

@Injectable()
export class GameOverService {

  constructor() { }

  showPlayerFate(playerFateId){
    for (var i = 0; i <= FATES.length - 1; i++) {
      if (FATES[i].id === playerFateId) {
        return FATES[i];
      }
    }

  }

}
