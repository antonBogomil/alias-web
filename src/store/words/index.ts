import {action, computed, observable} from "mobx";

class Words {
    private readonly allArr: string[] = [];
    private skippedArr: string[] = [];
    @observable
    private index: number = 0;

    constructor(words: string[], skipped: string[] = []) {
        this.allArr = words;
        this.skippedArr = skipped;
    }

    @computed
    get available(): string[] {
        return this.allArr.filter((w) => !this.skippedArr.find((sw) => sw === w))
    }

    @computed
    get current(): string {
        return this.allArr[this.index]
    }

    @action
    next() {
        this.skippedArr.push(this.current);
        this.index++;
    }
}

export default Words