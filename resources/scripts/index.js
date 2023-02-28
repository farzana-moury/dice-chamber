// important variables and constants
let oddDiceNumber, commonDiceNumber, dicePerColumn, randomPosition;
let gameScreen = [], totalDice;
const dicePerRow = 6;

function levelOne(){
    oddDiceNumber = Math.floor(Math.random() * 6) + 1;
    commonDiceNumber = Math.floor(Math.random() * 6) + 1;

    if(commonDiceNumber === oddDiceNumber){
        commonDiceNumber = Math.floor(Math.random() * 6) + 1;
    }else{
        commonDiceNumber = commonDiceNumber;
    }

    console.log(oddDiceNumber, commonDiceNumber);
}

levelOne();