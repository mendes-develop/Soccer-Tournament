let Match = require('./match.js')

class Tournament {
    constructor(){
        this.teams = [];
        this.games = [];
        this.season1 = [];
        this.season2 = [];
        this.winner = null;
        this.loser = null;
    }

    addTeam(team){
        this.teams.push(team)
    }
    
    table(){
        for (let i = 0; i < this.teams.length - 1; i++){
            for (let j = i + 1; j < this.teams.length; j++){
                let ida = new Match(this.teams[i], this.teams[j])
                let volta = new Match(this.teams[j], this.teams[i])
                this.games.push(ida)
                this.games.push(volta)
                this.season1.push(ida)
                this.season2.push(volta)
            }
        }
    }

    setWinner(){
       if (this.setWinners().length > 1) { 
           console.log("multiple winners") 
        } else { this.winner =  this.setWinners()[0].name }
    }

    setLoser(){
        if (this.setLosers().length > 1) { 
            console.log("multiple losers") 
        } else { this.loser =  this.setLosers()[0].name }
    }

    setWinners(){
        let highest = Math.max(...this.teams.map(team => team.points)); 
        return this.teams.filter(team => team.points === highest); 
    }

    setLosers(){
        let smallest = Math.min(...this.teams.map(team => team.points)); 
        return this.teams.filter(team => team.points === smallest); 
    }

}

module.exports = Tournament

