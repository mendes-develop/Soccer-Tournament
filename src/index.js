var Tournament = require('./tournament.js');
var Team = require('./team.js')


function start(){
    const tournament = new Tournament()
    const team1 = new Team("Alex")
    const team2 = new Team("Flavio")
    const team3 = new Team("Vini")
    
    tournament.addTeam(team1)
    tournament.addTeam(team2)
    tournament.addTeam(team3)
    tournament.table()

    function getRandom(){
        const min = Math.ceil(0);
        const max = Math.floor(5);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    tournament.games.forEach(match => {
        match.scorePerMatch(getRandom(), getRandom())
        console.log(match)
        console.log('---------')
    })
    console.log('\n','end')
     console.log(tournament)
}

start()












































// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output : process.stdout
// })

// function addTeam(){
//     rl.question("What's the name of your team? ", function(name){
//         let addTeam = new Team(name)
//         prompt()
//     })
// }

// function prompt(){
//     rl.question("Insert new time? ", function(answer){
//         if(answer.includes("Y")){
//             addTeam()
//         } 
//         rl.close()
//     })
// }

// rl.question("Welcome to Champions League 2020. Hit enter to continue", function(){
//     prompt()
//     })

// rl.on("close", function(){
//     console.log("bye")
//     process.exit(0)
// })