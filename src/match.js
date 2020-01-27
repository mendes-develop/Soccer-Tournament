class Match {
    constructor(home, away){
        this.home = home
        this.away = away
        this.scoreHome = null
        this.scoreAway = null
    }

    scorePerMatch(goalsHome, goalsAway){

        this.scoreHome = goalsHome;
        this.scoreAway = goalsAway;

        this.home.goalsTaken += goalsAway; 
        this.away.goalsTaken += goalsHome;

        if (goalsHome > goalsAway) {
            this.home.updateScoreWinner(goalsHome)
            this.away.updateScoreLoser(goalsAway)
        } else if(goalsHome < goalsAway){
            this.away.updateScoreWinner(goalsAway)
            this.home.updateScoreLoser(goalsHome)
        } else {
            this.home.updateScoreDraw(goalsHome)
            this.away.updateScoreDraw(goalsAway)
        }
    }
}

module.exports = Match