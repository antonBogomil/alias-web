function Game() {
	this.teams = [new Team('Tihon')];
	this.settings = {};
	this.words = [];
	this.wordsIndex = 0;
	this.currentTeamIndex = 0;
	this.currentRound = undefined;
	this.history = [];
	this.startRound = function () {
		const roundWords = this.getWords();
		const currentTeam = this.teams[this.currentTeamIndex];
		if (this.currentRound && !this.currentRound.finished) {
			console.log('Prev round not finished!');
			return
		}
		this.history.push(this.currentRound);
		this.currentRound = new Round([], currentTeam, 5);
		this.currentRound.start();
	};
	this.getWords = function () {
		return this.words.slice(this.wordsIndex)
	}
}

function Team(name) {
	this.score = 0;
	this.name = name;
	this.addScore = function (n) {
		this.score += n;
	}
}

function Round(words, team,maxTimeSec) {
	this.words = words;
	this.timeSec = 0;
	this.finished = false;
	this.timer = null;
	this.score = 0;
	this.start = function () {
		this.timer = setInterval(() => {
			this.timeSec++;
			console.log(this.timeSec + ' seconds');
			if (this.timeSec === maxTimeSec) {
				this.finish();
			}
		}, 1000)
	};
	this.stop = function () {
		clearInterval(this.timer)
	};
	this.reset = function () {
		clearInterval(this.timer);
		this.timeSec = 0;
	};
	this.finish = function () {
		team.addScore(this.score);
        this.reset();
        console.log('Round finished ', this.score);
	}
}

const game = new Game();
game.startRound();


