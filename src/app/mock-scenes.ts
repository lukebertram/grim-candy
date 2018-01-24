import { Scene } from './scene.model';
import { Choice } from './choice.model';

export const SCENES: Scene[] = [
  new Scene(
    0,
    "You stand in a clearing of the gingerbread plum forest. Exits are left and right. Which way will you go?",
    [
      new Choice(1, "description for choice A"),
      new Choice (2, "description for choice B")
    ]),
  new Scene(1, `After going A-wards, you are confronted by the Lord of Licorice, and he's one bad dude. He's surrounded by vicious looking licorice bats who seem to be laughing at you. "Are you lost?" he wheezes through blackened and crumbling teeth.<br/>`, []),
  new Scene(2, `You died, yo.`, [])
];
