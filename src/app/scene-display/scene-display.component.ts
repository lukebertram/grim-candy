import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Scene } from './../scene.model';
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
    private Location: Location,
    private sceneService: SceneService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.sceneId = parseInt(urlParameters['id']);
    });
  this.sceneToDisplay = this.sceneService.getSceneById(this.sceneId);  
  }

}
