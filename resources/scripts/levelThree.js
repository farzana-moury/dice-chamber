// important variables
let memoryDice = [], selectedDice = [];
let winRound = 1, winLevel;

// html elements
let gameScreen = document.getElementById('game-screen');
let dicePanel = document.getElementById('select-dice');
dicePanel.style.visibility = 'hidden';

function levelThree() {

    // populate the select dice panel
    for (let i=1; i<=6; i++){
        let dice = document.createElement('img');
        dice.className = 'selected-dice';
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
    
    generateMemoryDice();

    console.log(memoryDice);

    // we need to determine which dice from the dice panel the user clicked on
    dicePanel.querySelectorAll('.selected-dice').forEach(dice => {
        dice.addEventListener('click', () => {
            selectedDice.push(Number(dice.id));
            console.log(selectedDice);

            if(selectedDice[0] === memoryDice[0] && selectedDice[1] === memoryDice[1] && selectedDice[2] === memoryDice[2]){
                winRound++;
                memoryDice = [];
                selectedDice = [];
                gameScreen.innerHTML = '';
                dicePanel.innerHTML = '';
                levelThree();
        
                console.log(winRound);
            } else {
                console.log('not working');
            }
        });
    })
}

// set timer for memory dice to display
function generateMemoryDice(){
    if(gameScreen.style.visibility === 'hidden'){
        setTimeout(() => {
            gameScreen.style.visibility = 'visible';
        }, 3000);
    } else {
        setTimeout(() => {
            gameScreen.style.visibility = 'hidden';
        }, 3000);
    }  
    displayDicePanel();  
}

// the dice panel is revealed, where the user tries to remember the memory dice
function displayDicePanel(){
    if(dicePanel.style.visibility === 'hidden'){
        setTimeout(() => {
            dicePanel.style.visibility = 'visible';
        }, 3000);
    } 
}

levelThree();
