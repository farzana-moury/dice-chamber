// important variables 
let numberOfDice, number1, number2, answer, expression;
let operators = ["+", "-", "×", "÷",], randomIndex;
let option1Answer = 0, option2Answer = 0, option3Answer = 0;
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
            generateOtherAnswers();

            // set the html elements' text values
            option1.innerText = option1Answer;
            option2.innerText = option2Answer;
            option3.innerText = option3Answer;

            // set the id of the correct html element
            option1.id = 'correct';
            break;
        case 1:
            option2Answer = answer;
            generateOtherAnswers();

            option1.innerText = option1Answer;
            option2.innerText = option2Answer;
            option3.innerText = option3Answer;

            option2.id = 'correct';
            break;
        case 2:
            option2Answer = answer;
            generateOtherAnswers();

            option1.innerText = option1Answer;
            option2.innerText = option2Answer;
            option3.innerText = option3Answer;

            option3.id = 'correct';
            break;
        default:
            alert('No random index detected');
    }

    document.querySelector('#correct').addEventListener('click', () => {
        gameScreen.innerHTML = '';
        winRound++;
        option1.id = "option1";
        option2.id = "option2";
        option3.id = "option3";
        levelTwo();
    });
}

// creates answers for the other answer choices
function generateOtherAnswers(){
    let number1 = Math.floor(Math.random() * answer);
    let number2 = Math.floor(Math.random() * answer);

    // ensures every choice of answer is different
    while(number1 === answer || number2 === answer || number1 === number2){
        // we continue to randomize them
        number1 = Math.floor(Math.random() * answer);
        number2 = Math.floor(Math.random() * answer);
    }
    
    if (option1Answer === answer){
        option2Answer = number1;
        option3Answer = number2;
    } else if(option2Answer === answer){
        option1Answer = number1;
        option3Answer = number2;
    } else if(option3Answer === answer){
        option1Answer = number1;
        option2Answer = number2;
    }
}

levelTwo();