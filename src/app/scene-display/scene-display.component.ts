import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Scene } from './../scene.model';
import { Choice } from './../choice.model';
import { Router } from '@angular/router';
import { SceneService } from './../scene.service';

@Component({
  selector: 'app-scene-display',
  templateUrl: './scene-display.component.html',
  styleUrls: ['./scene-display.component.css'],
  providers: [SceneService]
})
export class SceneDisplayComponent implements OnInit {
  sceneId: number;
  sceneToDisplay: Scene;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Location: Location,
    private sceneService: SceneService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.sceneId = parseInt(urlParameters['id']);
      this.sceneToDisplay = this.sceneService.getSceneById(this.sceneId);
    });
  }

  goToScene(clickedChoice: Choice){
    console.log(`You clicked ${clickedChoice.sceneId}`);
    this.router.navigate(['scenes', clickedChoice.sceneId]);
    this.sceneToDisplay = this.sceneService.getSceneById(this.sceneId);
  }

}
