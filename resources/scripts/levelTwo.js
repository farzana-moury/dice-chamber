// important variables 
let numberOfDice, number1, number2, answer, expression = 0;
let allOperators = ["+", "-", "×", "÷",], randomIndex;
let expressionArray = [];
let operands = [], operators = [], bedmas = [];;
let option1Answer = 0, option2Answer = 0, option3Answer = 0;
let winRound = 1, winLevel;

// html elements
// let gameScreen = document.getElementById('game-screen');

// const equalSign = document.createElement("h1");
// equalSign.innerText = "=";

// const questionMark = document.createElement("h1");
// questionMark.innerText = "?";

function levelTwo(){
    numberOfDice = 5; //number of dice in each operand
    
    for (let i = 0; i < numberOfDice; i++){
        let randomNum = Math.floor(Math.random() * 6) + 1;
        let randomOperator = Math.floor(Math.random() * (allOperators.length));
        expressionArray.push(randomNum);
        expressionArray.push(allOperators[randomOperator]);
    }
    // console.log(expressionArray);

    for (let i = 0, j = 1; i <= expressionArray.length,j <= expressionArray.length; i += 2,j += 2){
        operands.push(expressionArray[i]);
        operators.push(expressionArray[j]);
    }
    operators.pop(); // gets rid of the extra operator at the end of the expression

    // console.log(expressionArray);
    // console.log(operands);
    // console.log(operators);

    console.log(operators);

    for(let i=0; i<operators.length; i++){
        if(operators[i] === "×" || operators[i] === "÷"){
            bedmas.push(operators[i]);
        }
    }

    for(let i=0; i<operators.length; i++){
        if(operators[i] === "+" || operators[i] === "-"){
            bedmas.push(operators[i]);
        }
    }

    console.log(operators);
    console.log(bedmas);
    

    // set up expression on screen

    // number1 = Math.floor(Math.random() * 6) + 1;
    // let dice1 = document.createElement('img');
    // dice1.src = `../images/dice-${number1}.png`

    // number2 = Math.floor(Math.random() * 6) + 1;
    // let dice2 = document.createElement('img');
    // dice2.src = `../images/dice-${number2}.png`

    // randomIndex = Math.floor(Math.random() * 3);

    // let operator = document.createElement('h1');
    // operator.id = "operator";
    // operator.innerText = operators[randomIndex];

    // let option1 = document.getElementById("option1");
    // let option2 = document.getElementById("option2");
    // let option3 = document.getElementById("option3");

    // gameScreen.append(dice1, operator, dice2, equalSign);

    // evaluate expression
    // switch(operator.innerText){
    //     case "+":
    //         answer = number1 + number2;
    //         break;
    //     case "-":
    //         answer = number1 - number2;
    //         break;
    //     case "×":
    //         answer = number1 * number2;
    //         break;
    //     case "÷":
    //         answer = number1 / number2;
    //         break;
    //     default:
    //         alert("No expression detected");
    // }

    // randomIndex =  Math.floor(Math.random() * 2);

    // switch(randomIndex){
    //     case 0:
    //         // set the appropriate answers to each choice
    //         option1Answer = answer;
    //         generateOtherAnswers();

    //         // set the html elements' text values
    //         option1.innerText = option1Answer;
    //         option2.innerText = option2Answer;
    //         option3.innerText = option3Answer;

    //         // set the id of the correct html element
    //         option1.id = 'correct';
    //         break;
    //     case 1:
    //         option2Answer = answer;
    //         generateOtherAnswers();

    //         option1.innerText = option1Answer;
    //         option2.innerText = option2Answer;
    //         option3.innerText = option3Answer;

    //         option2.id = 'correct';
    //         break;
    //     case 2:
    //         option2Answer = answer;
    //         generateOtherAnswers();

    //         option1.innerText = option1Answer;
    //         option2.innerText = option2Answer;
    //         option3.innerText = option3Answer;

    //         option3.id = 'correct';
    //         break;
    //     default:
    //         alert('No random index detected');
    // }

    // document.querySelector('#correct').addEventListener('click', () => {
    //     gameScreen.innerHTML = '';
    //     winRound++;
    //     option1.id = "option1";
    //     option2.id = "option2";
    //     option3.id = "option3";
    //     levelTwo();
    // });
}

// creates answers for the other answer choices
// function generateOtherAnswers(){
//     let number1 = Math.floor(Math.random() * answer);
//     let number2 = Math.floor(Math.random() * answer);

//     // ensures every choice of answer is different
//     while(number1 === answer || number2 === answer || number1 === number2){
//         // we continue to randomize them
//         number1 = Math.floor(Math.random() * answer);
//         number2 = Math.floor(Math.random() * answer);
//     }
    
//     if (option1Answer === answer){
//         option2Answer = number1;
//         option3Answer = number2;
//     } else if(option2Answer === answer){
//         option1Answer = number1;
//         option3Answer = number2;
//     } else if(option3Answer === answer){
//         option1Answer = number1;
//         option2Answer = number2;
//     }
// }

levelTwo();