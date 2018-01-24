import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SceneService } from './../scene.service';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.css'],
  providers: [SceneService]
})
export class GameStartComponent implements OnInit {

  constructor(
    private router: Router,
    private sceneService: SceneService
  ) { }

  ngOnInit() {
  }

  startGame(){
    this.router.navigate(['scenes', 0]);
  }

}
