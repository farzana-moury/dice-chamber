// important variables 
let numberOfDice, number1, number2, answer, expression;
let operators = ["+", "-", "×", "÷",], randomIndex;
let winRound = 1, winLevel;

// html elements
let gameScreen = document.getElementById('game-screen')
let operator = document.createElement('h1');
operator.id = "operator";
const equalSign = document.createElement("h1");
equalSign.innerText = "=";
const questionMark = document.createElement("h1");
questionMark.innerText = "?";

function levelTwo(){
    numberOfDice = 1; //number of dice in each operand

    // set up expression on screen
    number1 = Math.floor(Math.random() * 6) + 1;
    let dice1 = document.createElement('img');
    dice1.src = `../images/dice-${number1}.png`

    number2 = Math.floor(Math.random() * 6) + 1;
    let dice2 = document.createElement('img');
    dice2.src = `../images/dice-${number2}.png`

    randomIndex = Math.floor(Math.random() * 3);
    operator.innerText = operators[randomIndex];

    gameScreen.append(dice1, operator, dice2, equalSign);

    // evaluate expression
    switch(operator.innerText){
        case "+":
            answer = number1 + number2;
            break;
        case "-":
            answer = number1 - number2;
            break;
        case "×":
            answer = number1 * number2;
            break;
        case "÷":
            answer = number1 / number2;
            break;
        default:
            alert("no expression detected");
    }

    console.log(answer);
}

levelTwo();