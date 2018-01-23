import { Choice } from './choice.model';

export class Scene {
  constructor(
    public id: number,
    public description: string,
    public choices: Choice[]
  ){};
}
