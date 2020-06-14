import Settings from "./settings";
// import {dictionary} from "../../data";
import Teams from "../teams";
import Round from "./round";
import {action, computed, observable} from "mobx";
import LocalStorageService from '../../services/localStorage'
import Words from "../words";
import wordsData from '../../data/words.json'

const localStore = new LocalStorageService('gameStore');

class Game {
    public settings = new Settings();
    public teams: Teams;
    public words: Words;

    public teamIndex = 0;
    @observable private wordIndex = 0;
    @observable public round!: Round;

    constructor() {
        const initialStore = localStore.get();
        this.words = new Words(wordsData);
        this.teams = new Teams(this, initialStore.teams);
        this.teamIndex = initialStore.teamIndex || 0;

    }

    @computed get currentTeam() {
        return this.teams.getByIndex(this.teamIndex)
    }

    @action
    setNextTeam() {
        if (this.teamIndex === this.teams.list.length - 1) {
            this.teamIndex = 0
        } else {
            this.teamIndex++
        }
    }

    @action createRound() {
        this.round = new Round(this);
    }

    @action
    skipRound() {
        this.setNextTeam();
    }

    save() {
        const toSaveData = mapToSave(this)
        localStore.set(toSaveData)
    }

    @action
    restart() {
        this.teamIndex = 0;
        this.teams.reset()
    }
}

function mapToSave(store: Game) {
    return {
        teams: store.teams.toSave(),
        teamIndex: store.teamIndex
    }
}

export default Game;

