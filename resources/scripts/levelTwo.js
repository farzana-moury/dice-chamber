// important variables 
let numberOfDice, number1, number2, answer, expression;
let operators = ["+", "-", "×", "÷",], randomIndex;
let option1Answer, option2Answer, option3Answer;
let winRound = 1, winLevel;

// html elements
let gameScreen = document.getElementById('game-screen')

let operator = document.createElement('h1');
operator.id = "operator";

const equalSign = document.createElement("h1");
equalSign.innerText = "=";

const questionMark = document.createElement("h1");
questionMark.innerText = "?";

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");

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
            alert("No expression detected");
    }

    randomIndex =  Math.floor(Math.random() * 2);

    switch(randomIndex){
        case 0:
            // set the appropriate answers to each choice
            option1Answer = answer;
            generateOtherAnswers(answer, option2Answer, option3Answer);

            // set the html elements' text values
            option1.innerText = option1Answer;
            option2.innerText = option2Answer;
            option3.innerText = option3Answer;

            // set the id of the correct html element
            option1.id = 'correct';
            break;
        case 1:
            option2Answer = answer;
            generateOtherAnswers(answer, option1Answer, option3Answer);

            option1.innerText = option1Answer;
            option2.innerText = option2Answer;
            option3.innerText = option3Answer;

            option2.id = 'correct';
            break;
        case 2:
            option3Answer = answer;
            generateOtherAnswers(answer, option1Answer, option2Answer);

            option1.innerText = option1Answer;
            option2.innerText = option2Answer;
            option3.innerText = option3Answer;

            option3.id = 'correct';
            break;
        default:
            alert('No random index detected');
    }
}

// creates answers for the other answer choices
function generateOtherAnswers(answer, option1, option2){
    let number1 = Math.floor(Math.random() * answer);
    let number2 = Math.floor(Math.random() * answer);

    // while either of the randomly generated numbers equal the answer
    while(number1 === answer || number2 === answer){
        // we continue to randomize them
        number1 = Math.floor(Math.random() * answer);
        number2 = Math.floor(Math.random() * answer);
    }

    option1 = number1;
    option2 = number2;
}

levelTwo();