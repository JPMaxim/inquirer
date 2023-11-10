import { nameFunc } from "./functions/inq.js";
import { roundsFunc } from "./functions/inq.js";
import { weaponFunc } from "./functions/inq.js";
async function playRPS() {
    // inquire name
    let name = await nameFunc();
    // inquire rounds
    let rounds = await roundsFunc();
    // create scores
    let playerScore = 0;
    let botScore = 0;
    // iterate for number of rounds user specified
    for (let i=0; i<rounds.value; i++ ) {   
        console.log(`Round ${i+1}:`) 
        // inquire rock, paper, scissors    
        let weapon = await weaponFunc();
        console.log(name, rounds, weapon)
        // assign bot rock paper or scissors
        let bot = Math.floor(Math.random() * 3)
        if (bot == 0) { // bot is rock
            // console.log(`${name.name}: ${weapon.weapon} | bot: rock`);   
            if (weapon.weapon == "rock") {
                console.log(`drawn round`)               
            } else if (weapon.weapon == "paper") {
                console.log(`${name.name} wins`)
                playerScore += 1
            } else {
                console.log(`bot wins`)
                botScore += 1;
            }
        } else if (bot == 1) { // bot is paper
            console.log(`${name.name}: ${weapon.weapon} | bot: paper`); 
            if (weapon.weapon == "rock") {
                console.log(`bot wins`)
                botScore += 1;               
            } else if (weapon.weapon == "paper") {
                console.log(`drawn round`)
            } else {
                console.log(`${name.name} wins`)
                playerScore += 1
            }
        } else { // bot is scissors
            console.log(`${name.name}: ${weapon.weapon} | bot: scissors`); 
            if (weapon.weapon == "rock") {
                console.log(`${name.name} wins`)
                playerScore += 1               
            } else if (weapon.weapon == "paper") {
                console.log(`bot wins`)
                botScore += 1;
            } else {
                console.log(`drawn round`)
            }
        }
        console.table({
            player: playerScore,
            bot: botScore,
        })
    }
}
playRPS()