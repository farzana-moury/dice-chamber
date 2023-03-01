// important variables and constants
let oddDiceNumber, commonDiceNumber, totalRows = 1, randomPosition;
let diceArray = [], totalDice, totalCommonDice;
let winRound = 1, winLevel;
const totalColumns = 6;

// html elements
let gameScreen = document.getElementById('game-screen');

function levelOne(){
    diceArray.length = totalColumns * totalRows;

    // set odd dice and common dice numbers
    oddDiceNumber = Math.floor(Math.random() * 6) + 1;
    commonDiceNumber = Math.floor(Math.random() * 6) + 1;

    // check to ensure the two dice numbers are always different 
    while(oddDiceNumber === commonDiceNumber){
        commonDiceNumber = Math.floor(Math.random() * 6) + 1;
    }

    // place down all the common dice first
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i] = commonDiceNumber;
    }
    // then place the odd dice on a random position
    randomPosition = Math.floor(Math.random() * 5);
    diceArray[randomPosition] = oddDiceNumber;

    // set odd dice and common dice images on the screen accordingly
    for (const dice of diceArray) {
        if(dice === oddDiceNumber){
            let oddDice = document.createElement('img');
            oddDice.src = `../images/dice-${oddDiceNumber}.png`;
            oddDice.className = 'odd-dice';
            gameScreen.appendChild(oddDice);
        } else {
            let commonDice = document.createElement('img');
            commonDice.src = `../images/dice-${commonDiceNumber}.png`;
            commonDice.className = 'common-dice';
            gameScreen.appendChild(commonDice);
        }
    }

    // moving on to the next level
    if(winRound === 5){
        winLevel = true;
    }
    if(winLevel === true){
        gameScreen.innerHTML = '';
        window.location.href = "../levels/levelTwo.html";
    }

    // if the user clicks a common dice, the game does not progress
    document.querySelectorAll('.common-dice').forEach(dice => {
        dice.addEventListener('click', () => {
            document.body.style.backgroundColor = 'red';
        });
    })
    
    // if the user clicks on an odd dice, the game progresses to the next round
    document.querySelector('.odd-dice').addEventListener('click', () => {
            // console.log('success!');
            gameScreen.innerHTML = '';
            winRound++;
            totalRows *= 2;
            diceArray = [];
            levelOne();
    });
}

levelOne();