import Team from "../teams/team";
import {action, computed, observable} from "mobx";
import Settings from "./settings";

type HistoryItem = {
    word: string,
    status: boolean
}

class Round {
    @observable wordIndex: number = 0;
    @observable score: number;
    @observable timeSec: number = 0;
    @observable history: HistoryItem[] = [];
    words: [] = [];


    private settings: Settings;
    private team: Team;
    private timer;

    constructor(words, team: Team, settings) {
        this.words = words;
        this.settings = settings;
        this.score = 0;
        this.team = team;
    }

    @computed get finished() {
        return this.timeSec === this.settings.roundTimeSec
    }

    @computed
    public get currentWord() {
        return this.words[this.wordIndex];
    }

    @action
    public nextWord() {
        this.wordIndex++;
    }

    @action
    public start() {
        this.timer = setInterval(() => {
            this.timeSec++
            if (this.finished) {
                this.finish();
            }
        }, 1000)
    }

    public stop() {
        clearInterval(this.timer)
    }

    private reset() {
        this.stop();
        this.timeSec = 0;
    }

    private finish() {
        console.log(this.team);
        this.team.addScore(this.score);
        this.stop();
    }

    @computed
    get playAudioClock() {
        return (this.settings.roundTimeSec - this.timeSec) === 10
    }

    @action
    addPoints() {
        this.score = this.score + this.settings.pointsPlus;
        this.nextWord();
        this.pushHistory(this.currentWord, true)
    }

    @action
    minusPoints() {
        this.score = this.score - this.settings.pointsMinus;
        this.nextWord();
        this.pushHistory(this.currentWord, false)
    }

    @action
    private pushHistory(name, value) {
        this.history.push({
            word: name,
            status: value
        })
    }

    @action
    changeHistory(word) {
        const itemIndex = this.history.findIndex((item) => (item.word === word));
        this.history[itemIndex] = {
            word,
            status: !this.history[itemIndex].status
        };
        this.score = this.history.reduce((sum, currentValue) => {
            if (currentValue.status) return sum + this.settings.pointsPlus;
            return sum - this.settings.pointsMinus
        }, 0)
    }
}

export default Round