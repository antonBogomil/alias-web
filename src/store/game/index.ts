import Settings from "./settings";
import dictionary from "../../config/dictionary";
import Teams from "../teams";
import Round from "./round";
import {action, computed, observable} from "mobx";

class Game {
    private settings = new Settings();
    private teams = new Teams();
    private dictionary = dictionary;
    private teamIndex = 0;
    public isStarted = false;
    @observable private wordIndex = 0;
    @observable public round!: Round;

    private getWords() {
        return dictionary.slice(this.wordIndex)
    }

    start() {
        this.isStarted = true
    }
    stop(){
        this.isStarted = false
    }

    @computed get currentTeam() {
        return this.teams.getByIndex(this.teamIndex)
    }

    @action createRound() {
        const words = this.getWords();
        const team = this.teams.getByIndex(this.teamIndex);
        this.round = new Round(words, team, this.settings);
    }
}

export default Game;

