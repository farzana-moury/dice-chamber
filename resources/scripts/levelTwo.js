// important variables 
let numberOfOperands = 2, number1, number2, evaluation = 0;
let allOperators = ['+', '-', '×', '÷'], randomIndex;
let expressionArray = [];
let operands = [], operators = [], bedmas = [];
let option1Answer = 0, option2Answer = 0, option3Answer = 0;
let winRound = 1, winLevel;

// html elements
let gameScreen = document.getElementById('game-screen');
let optionsPanel = document.getElementById('answer-choices');

const questionMark = document.createElement("h1");
questionMark.id = "question-mark";
questionMark.innerText = "?";

function levelTwo() {
    // creating a random expression
    for (let i = 0; i < numberOfOperands; i++) {
        let randomNum = Math.floor(Math.random() * 6) + 1;
        let randomOperator = Math.floor(Math.random() * (allOperators.length));
        expressionArray.push(randomNum);
        expressionArray.push(allOperators[randomOperator]);
    }
    expressionArray[expressionArray.length - 1] = "="; // replacing the last operator to be equal operator

    // grabbing all the operators within the expression
    for (let i = 1; i <= expressionArray.length; i += 2) {
        operators.push(expressionArray[i]);
    }
    operators.pop(); // gets rid of the extra operator at the end of the expression

    // reordering the operators according to BEDMAS
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '×' || operators[i] === '÷') { // first we extract the multiplication and division operators
            bedmas.push(operators[i]);
        }
    }
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+' || operators[i] === '-') { // and then we extract the addition and subtraction operators
            bedmas.push(operators[i]);
        }
    }

    // grabbing all the operands in the expression and reordering them according to BEDMAS
    for (let i = 0; i < expressionArray.length; i += 2) {
        if (i == 0) {
            operands.push(expressionArray[i]);
        }
        else if (i >= 2 && expressionArray[i - 1] === '×' || i >= 2 && expressionArray[i - 1] === '÷') {
            operands.push(expressionArray[i]);
        }
    }
    for (let i = 0; i < expressionArray.length; i += 2) {
        if (i >= 2 && expressionArray[i - 1] === '+' || i >= 2 && expressionArray[i - 1] === '-') {
            operands.push(expressionArray[i]);
        }
    }

    //we set the evaluation to the first operand since this is our starting point in the calculation
    evaluation = operands[0];

    // calculating with BEDMAS to determine the final evaluation
    for (let i = 0; i < bedmas.length; i++) {
        if (bedmas[i] === '×') {
            evaluation *= operands[i + 1];
        }
        else if (bedmas[i] === '÷') {
            evaluation /= operands[i + 1];
        }
        else if (bedmas[i] === '+') {
            evaluation += operands[i + 1];
        }
        else if (bedmas[i] === '-') {
            evaluation -= operands[i + 1];
        }
        evaluation = Math.round(evaluation);
    }

    // console.log(expressionArray);
    // console.log(operators);
    // console.log(operands);
    // console.log(bedmas);
    // console.log(evaluation);


    // configuring the HTML elements
    // set up expression on screen
    for (let i = 0; i < expressionArray.length; i++) {
        if (typeof expressionArray[i] === "number") {
            let dice = document.createElement('img');
            dice.src = `../images/dice-${expressionArray[i]}.png`;
            gameScreen.append(dice);
        }
        else {
            let operator = document.createElement('h1');
            operator.innerHTML = expressionArray[i];
            gameScreen.append(operator);
        }
    }
    gameScreen.append(questionMark);

    let option1 = document.getElementById("option");
    let option2 = document.getElementById("option");
    let option3 = document.getElementById("option");

    randomIndex =  Math.floor(Math.random() * 3);
    console.log(randomIndex);

    switch(randomIndex){
        case 0:
            option1Answer = evaluation;
            option1.id = 'correct';
            if(evaluation < 0){
                option2Answer = Math.floor(Math.random() * 10) + (evaluation + 1);
                option3Answer = Math.floor(Math.random() * 10) + (option2Answer + 1);
            }
            else if (evaluation > 0){
                option2Answer = Math.floor(Math.random() * 10) + (evaluation + 1);
                option3Answer = Math.floor(Math.random() * 10) + option2Answer + 1;
            } else {
                option2Answer = Math.floor(Math.random() * 10) + 1;
                option3Answer = Math.floor(Math.random() * 10) + option2Answer + 1;
            }

            break;
        case 1:
            option2Answer = evaluation;
            option2.id = 'correct';
            if(evaluation < 0){
                option1Answer = Math.floor(Math.random() * 10) + (evaluation + 1);
                option3Answer = Math.floor(Math.random() * 10) + (option1Answer + 1);
            }
            else if (evaluation > 0){
                option1Answer = Math.floor(Math.random() * 10) + (evaluation + 1);
                option3Answer = Math.floor(Math.random() * 10) + option1Answer + 1;
            } else {
                option1Answer = Math.floor(Math.random() * 10) + 1;
                option3Answer = Math.floor(Math.random() * 10) + option1Answer + 1;
            }

            break;
        case 2:
            option3Answer = evaluation;
            option3.id = 'correct';
            if(evaluation < 0){
                option1Answer = Math.floor(Math.random() * 10) + (evaluation + 1);
                option2Answer = Math.floor(Math.random() * 10) + (option1Answer + 1);
            }
            else if (evaluation > 0){
                option1Answer = Math.floor(Math.random() * 10) + (evaluation + 1);
                option2Answer = Math.floor(Math.random() * 10) + option1Answer + 1;
            } else {
                option1Answer = Math.floor(Math.random() * 10) + 1;
                option2Answer = Math.floor(Math.random() * 10) + option1Answer + 1;
            }

            break;
        default:
            alert('Could not identify random index');
    }

    // console.log(option1Answer, option2Answer, option3Answer);

    option1.innerText = option1Answer;
    option2.innerText = option2Answer;
    option3.innerText = option3Answer;

    // moving on to the next level
    if(winRound === 7){
        winLevel = true;
    }
    if(winLevel === true){
        optionsPanel.innerHTML = '';
        gameScreen.innerHTML = '';
        window.location.href = "../levels/levelThree.html";
    }

    // if the user clicks on the correct answer, the game progresses to the next round
    document.querySelector('#correct').addEventListener('click', () => {
        gameScreen.innerHTML = '';
        option1.id = 'option';
        option2.id = 'option';
        option3.id = 'option';
        winRound++;
        numberOfOperands++;
        expressionArray = [], operators = [], operands = [], bedmas = [];
        levelTwo();
    });

    // if the user clicks on the wrong answer, the game retries the same round
    document.querySelectorAll('#option').addEventListener(option => {
        option.addEventListener('click', () => {
            gameScreen.innerHTML = '';
            option1.id = 'option';
            option2.id = 'option';
            option3.id = 'option';
            expressionArray = [], operators = [], operands = [], bedmas = [];
            levelTwo();
        });
    })

}

levelTwo();