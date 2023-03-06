// important variables
let memoryDice = [], selectedDice = [];
let winRound = 1, winLevel;
let memoryDiceNum = 1, timer = 3000;

// html elements
let gameScreen = document.getElementById('game-screen');
let dicePanel = document.getElementById('select-dice');
dicePanel.style.visibility = 'hidden';

function levelThree() {
    // moving on to the next level
    if(winRound === 6){
        winLevel = true;
    }
    if(winLevel === true){
        dicePanel.innerHTML = '';
        gameScreen.innerHTML = '';
        window.location.href = "../levels/levelFour.html";
    }

    // populate the select dice panel
    for (let i=1; i<=6; i++){
        let dice = document.createElement('img');
        dice.className = 'selected-dice';
        dice.src = `../images/dice-${i}.png`;
        dice.id = "" + i;
        dicePanel.appendChild(dice);
    }

    // generate three random dice and display to user
    for (let i=0; i<memoryDiceNum; i++){
        let randomNum = Math.floor(Math.random() * 6) + 1;
        let dice = document.createElement('img');
        dice.src = `../images/dice-${randomNum}.png`;
        gameScreen.appendChild(dice);
        memoryDice.push(randomNum);
    }
    
    generateMemoryDice();

    // console.log(memoryDice);

    // we need to determine which dice from the dice panel the user clicked on
    dicePanel.querySelectorAll('.selected-dice').forEach(dice => {
        dice.addEventListener('click', () => {
            selectedDice.push(Number(dice.id));
            // console.log(selectedDice);

            // if the user gets the correct order of dice, we progress to the next round (adding complexity)
            if(areArraysEqual(selectedDice, memoryDice) === true){
                winRound++;
                timer -= 500;
                memoryDiceNum++;
                memoryDice = [];
                selectedDice = [];
                gameScreen.innerHTML = '';
                dicePanel.innerHTML = '';
                levelThree();
        
                console.log(winRound);
            } else {
                console.log('wrong!');
            }
        });
    })
}

// set timer for memory dice to display
function generateMemoryDice(){
    setTimeout(() => {
        gameScreen.style.visibility = 'hidden';
    }, timer);

    gameScreen.style.visibility = 'visible';

    displayDicePanel();  
}

// set timer for dice panel to display
function displayDicePanel(){
    setTimeout(() => {
        dicePanel.style.visibility = 'visible';
    }, timer);

    dicePanel.style.visibility = 'hidden';
}

// check for array equality
function areArraysEqual(arrayA, arrayB){
    return arrayA.length === arrayB.length && arrayA.every((value, index) => value === arrayB[index]);
}

levelThree();
