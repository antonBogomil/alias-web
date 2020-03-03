import {action, computed, observable} from "mobx";
import Team from "./team";

let teamsCounter = +new Date();

function setLocaleStorage(data) {
    localStorage.setItem('teams', JSON.stringify(data))
}

function getLocaleStorage() {
    const str = localStorage.getItem('teams');
    if (str) return JSON.parse(str);
    else return []
}

class Teams {
    @observable list: Team[] = this.createTeams(getLocaleStorage());
    @action add = (data) => {
        this.list.push(new Team(++teamsCounter, data.name));
        setLocaleStorage(this.list);
    };
    @action delete = (id) => {
        console.log(this.list);
        this.list = this.list.filter((t: Team) => {
            return t.id !== +id
        });
        setLocaleStorage(this.list);
    };

    @computed get count() {
        return this.list.length
    }

    createTeams(data: []) {
        return data.map((item: Team) => new Team(item.id, item.name))
    }

    getByIndex(index) {
        return this.list[index]
    }

    getById(id: number) {
        return this.list.find((team) => team.id === id)
    }

}

export default Teams

