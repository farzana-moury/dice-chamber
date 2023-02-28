// important variables and constants
let oddDiceNumber, commonDiceNumber, totalRows, randomPosition;
let gameScreen = [], totalDice, totalCommonDice;
const totalColumns = 6;

function levelOne(){
    totalRows = 1;
    gameScreen.length = totalColumns * totalRows;
    oddDiceNumber = Math.floor(Math.random() * 6) + 1;
    commonDiceNumber = Math.floor(Math.random() * 6) + 1;

    // check to ensure the two dice numbers are always different 
    if(commonDiceNumber === oddDiceNumber){
        commonDiceNumber = Math.floor(Math.random() * 6) + 1;
    }else{
        commonDiceNumber = commonDiceNumber;
    }

    // console.log(oddDiceNumber, commonDiceNumber);

    //place in all the common dice first
    for(let i = 0; i < gameScreen.length; i++){
        gameScreen[i] = commonDiceNumber;
    }
    //then place the odd dice in a random position
    randomPosition = Math.floor(Math.random() * 5);
    gameScreen[randomPosition] = oddDiceNumber;

    console.log(gameScreen);
}

levelOne();