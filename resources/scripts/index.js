// important variables and constants
let oddDiceNumber, commonDiceNumber, totalRows, randomPosition;
let gameScreenArray = [], totalDice, totalCommonDice;
let winRound, winLevel;
const totalColumns = 6;

// html elements
let oddDice = document.createElement('img');
let commonDice = document.createElement('img');
let gameScreen = document.getElementById('game-screen');


function levelOne(){
    totalRows = 1;
    gameScreenArray.length = totalColumns * totalRows;

    // set odd dice and common dice numbers
    oddDiceNumber = Math.floor(Math.random() * 6) + 1;
    commonDiceNumber = Math.floor(Math.random() * 6) + 1;

    // check to ensure the two dice numbers are always different 
    if(commonDiceNumber === oddDiceNumber){
        commonDiceNumber = Math.floor(Math.random() * 6) + 1;
    }else{
        commonDiceNumber = commonDiceNumber;
    }

    console.log(oddDiceNumber, commonDiceNumber);

    //place in all the common dice first
    for(let i = 0; i < gameScreenArray.length; i++){
        gameScreenArray[i] = commonDiceNumber;
    }
    //then place the odd dice in a random position
    randomPosition = Math.floor(Math.random() * 5);
    gameScreenArray[randomPosition] = oddDiceNumber;

    // console.log(gameScreen);

    // set odd dice and common dice images
    oddDice.src = `../images/dice-${oddDiceNumber}.png`;
    commonDice.src = `../images/dice-${commonDiceNumber}.png`;

    gameScreen.append(oddDice, commonDice);
}

levelOne();