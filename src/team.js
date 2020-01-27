class Team {
    constructor(name){
        this.name = name;
        this.points = 0;
        this.gamesPlayed = 0;
        this.victories = 0;
        this.draws = 0;
        this.loses = 0;
        this.goalsScored = 0;
        this.goalsTaken = 0;
        this.goalsAverage = 0;
    }


    updateScoreWinner(goals){
        this.points += 3;
        this.gamesPlayed += 1;
        this.victories += 1;
        this.goalsScored += goals
    }

    updateScoreLoser(goals){
        this.gamesPlayed += 1;
        this.loses += 1;
        this.goalsScored += goals
    }

    updateScoreDraw(goals){
        this.gamesPlayed += 1;
        this.points += 1
        this.draws += 1;
        this.goalsScored += goals
    }

}

module.exports = Team