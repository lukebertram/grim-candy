import { Scene } from './scene.model';
import { Choice } from './choice.model';

export const SCENES: Scene[] = [
  new Scene(0, "You stand in a clearing of the gingerbread plum forest. Exits are left and right. Which way will you go?", [new Choice("Url A", "description A"), new Choice ("Url B", "description B")]),
  new Scene(1, `After going A-wards, you are confronted by the Lord of Licorice, and he's one bad dude. He's surrounded by vicious looking licorice bats who seem to be laughing at you. "Are you lost?" he wheezes through blackened and crumbling teeth.<br/>`, [new Choice("Url A", "description A"), new Choice ("Url B", "description B")]),
  new Scene(2, "You stand in a clearing of the gingerbread plum forest. Exits are left and right. Which way will you go?", [new Choice("Url A", "description A"), new Choice ("Url B", "description B")]),
];
