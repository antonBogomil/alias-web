import {observable} from "mobx";
import {colors} from "../../data";

class Team {
    public readonly id: number;
    public color: string;
    @observable name: string;
    private score: number;

    constructor(id, name) {
        this.name = name;
        this.id = id;
        this.score = 0;
        this.color = colors[id]
    }
    public addScore(n) {
        this.score += n;
    }
}

export default Team