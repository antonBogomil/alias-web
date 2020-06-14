import {action, computed, observable} from "mobx";
import Game from "./index";

type RoundHistory = {
    [key: string]: boolean,
}

class Round {
    @observable wordIndex: number = 0;
    @observable timeSec: number = 0;
    @observable history: RoundHistory = {};
    @observable isPaused: boolean = false;
    // @observable isForcedFinished: boolean = false;
    private timer;
    root: Game;

    constructor(root: Game) {
        this.root = root;
    }

    @computed
    get finished() {
        return this.timeSec === this.root.settings.roundTimeSec ||
            !this.root.words.current
    }

    @action
    public start() {
        this.isPaused = false;
        this.timer = setInterval(() => {
            this.timeSec++;
            if (this.finished) {
                this.finish();
            }
        }, 1000)
    }

    @action
    public stop() {
        clearInterval(this.timer);
        this.isPaused = true
    }

    @action
    private reset() {
        this.stop();
        this.timeSec = 0;
    }

    @action
    public finish() {
        this.timeSec = this.root.settings.roundTimeSec;
        this.root.currentTeam.addScore(this.score);
        this.stop();
        this.root.setNextTeam();
        this.root.save()
    }

    @computed
    get score() {
        const values = Object.values(this.history);
        return values.reduce((sum, status) => {
            return sum + +(status ? this.root.settings.pointsPlus : -this.root.settings.pointsMinus)
        }, 0)
    }

    @action
    next(status: boolean) {
        this.pushHistory(this.root.words.current, status);
        this.root.words.next()
    }

    @action
    private pushHistory(key: string, status: boolean) {
        this.history[key] = status
    }

    @action
    changeHistory(word: string) {
        this.history[word] = !this.history[word];
    }
}

export default Round
