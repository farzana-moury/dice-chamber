// important variables
let guess, correctGuess;
let winRound = 1, winLevel;

// html elements
let gameScreen = document.getElementById('game-screen');

function levelFour() {
    let correctGuess = Math.floor(Math.random() * 6) + 1; // generate a random roll number - this is the actual guess
    let placeholder = Math.floor(Math.random() * 6) + 1; // generate placeholder number for dice clicker

    // make sure the placeholder number is not the same as the actual guess number
    while (correctGuess === placeholder) {
        placeholder = Math.floor(Math.random() * 6) + 1;
    }

    // adding the guess label - which displays if you have the right roll or not
    let guessLabel = document.createElement('h2');
    guessLabel.innerText = '?';
    gameScreen.appendChild(guessLabel);

    // adding the dice where the user will repeatedly click (i.e. roll)
    let dice = document.createElement('img');
    dice.src = `../images/dice-${placeholder}.png`;
    dice.id = 'click-dice';
    gameScreen.appendChild(dice);

    console.log(correctGuess, placeholder);

    // simulate the dice roll
    document.querySelectorAll('#click-dice').forEach(dice => {
        dice.addEventListener('click', () => {
            guess = Math.floor(Math.random() * 6) + 1;
            console.log(guess);
            dice.src = `../images/dice-${guess}.png`;

            // if the user guesses right the label displays correct ...
            if (guess === correctGuess) {
                guessLabel.innerHTML = 'CORRECT';
                guessLabel.style.color = 'green';
                setTimeout(() => {
                    // and we progress to the next round
                    winRound++;
                    gameScreen.innerHTML = '';
                    guessLabel.innerText = '?';
                    levelFour();
                }, 3000);
            } else { // otherwise the label will tell you it's wrong
                guessLabel.style.color = 'white';
                guessLabel.innerHTML = 'Bad roll.';
            }
            
            // once 10 rounds are complete, the level is won
            if (winRound === 10){
                winLevel = true;
            }
            if (winLevel){
                gameScreen.innerHTML = '';
                window.location.href = "../levels/endScreen.html";
            }
        });
    })
}

levelFour();