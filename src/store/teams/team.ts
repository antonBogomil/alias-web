import {observable} from "mobx";

export interface ITeam {
  name: string
  id: number
  color: string,
  score: number
}

class Team implements ITeam{
  @observable name: string;
  public readonly id: number;
  public color: string;
  public score: number;

  constructor(id, name, color, score = 0) {
	this.name = name;
	this.id = id;
	this.score = score;
	this.color = color;
  }

  public addScore(n) {
	this.score += n;
  }
}

export default Team
