import {action, computed, observable} from "mobx";
import Team from "./team";
import {colors} from "../../data";
import Game from "../game";

let teamsCounter = +new Date();

class Teams {
  root: Game;
  @observable list: Team[];
  @observable addModalOpen: boolean = false;
  @observable deleteModalOpen: boolean = false;


  constructor(root, teams: Team[] = []) {
	this.root = root
	this.list = this.createTeams(teams)
  }

  @action add = (name: string): boolean => {
	if (this.validate(name)) {
	  const availableColor = colors.find((color) => {
		const teamsColors = this.list.map((t) => t.color)
		return !teamsColors.find((c) => c === color)
	  })
	  this.list.push(new Team(++teamsCounter, name, availableColor));
	  this.root.save()
	  return true
	} else return false
  };
  @action delete = (id) => {
	this.list = this.list.filter((t: Team) => {
	  return t.id !== +id
	});
	this.root.save()
  };

  @computed get count() {
	return this.list.length
  }

  createTeams(data: Team[]) {
	return data.map((item: Team) => new Team(item.id, item.name, item.color, item.score))
  }

  getByIndex(index) {
	return this.list[index]
  }

  public validate = (name: string): boolean => {
	return (
	  !this.getByName(name) &&
	  name.length > 2
	)
  }

  public getByName(name: string): Team | undefined {
	return this.list.find((t) => t.name === name)
  }

  public getById(id: number) {
	return this.list.find((team) => team.id === id)
  }

  @action reset = () => {
	this.list = []
	this.root.save()
  }

  @action
  openAdd = (isOpen) => {
	this.addModalOpen = isOpen
  }
  @action
  openDelete = (team) => {
	this.deleteModalOpen = true
  }

  @computed
  get sorted() {
	return this.list.sort((t1, t2) => (t2.score - t1.score))
  }

  @computed
  get canAdd() {
	return this.list.length < this.root.settings.maxTeams
  }

  toSave() {
	return this.list
  }
}

export default Teams

