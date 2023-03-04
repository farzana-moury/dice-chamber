// important variables
let memoryDice = [];

// html elements
let gameScreen = document.getElementById('game-screen');
let dicePanel = document.getElementById('select-dice');

function levelThree() {

    // populate the select dice panel
    for (let i=1; i<=6; i++){
        let dice = document.createElement('img');
        dice.src = `../images/dice-${i}.png`;
        dice.id = "" + i;
        dicePanel.appendChild(dice);
    }

    // generate three random dice and display to user
    for (let i=0; i<3; i++){
        let randomNum = Math.floor(Math.random() * 6) + 1;
        let dice = document.createElement('img');
        dice.src = `../images/dice-${randomNum}.png`;
        gameScreen.appendChild(dice);
        memoryDice.push(randomNum);
    }

    console.log(memoryDice);
}

levelThree();
