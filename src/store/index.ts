import Game from "./game";
export interface IStore {
	root: Game,
}
export default class Store implements IStore {
  root: Game;

  constructor() {
	this.root = new Game()
  }
}
