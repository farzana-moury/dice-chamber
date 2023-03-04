// important variables 
let numberOfOperands, number1, number2, evaluation = 0;
let allOperators = ['+', '-', '×', '÷'], randomIndex;
let expressionArray = [];
let operands = [], operators = [], bedmas = [];
let option1Answer = 0, option2Answer = 0, option3Answer = 0;
let winRound = 1, winLevel;

// html elements
let gameScreen = document.getElementById('game-screen');

const questionMark = document.createElement("h1");
questionMark.id = "question-mark";
questionMark.innerText = "?";

function levelTwo() {
    numberOfOperands = 5;

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
    console.log(operands[0]);

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

    console.log(expressionArray);
    console.log(operators);
    console.log(operands);
    console.log(bedmas);
    console.log(evaluation);


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

    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");

    randomIndex =  Math.floor(Math.random() * 2);

    switch(randomIndex){
        case 0:
            option1Answer = evaluation;
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

    console.log(option1Answer, option2Answer, option3Answer);

    option1.innerText = option1Answer;
    option2.innerText = option2Answer;
    option3.innerText = option3Answer;
}

levelTwo();