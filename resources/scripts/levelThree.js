// important variables
let memoryDice = [];

// html elements
let gameScreen = document.getElementById('game-screen');
let dicePanel = document.getElementById('dice-select');

function levelThree() {
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
