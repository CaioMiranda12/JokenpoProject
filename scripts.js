const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const result = document.querySelector('.result')
const yourScore = document.querySelector('.your-score')
const machineScore = document.querySelector('.machine-score')

let myScore = 0;
let alexaScore = 0;

function userClick(e){
    const machineValue = alexaPlays().className
    const userValue = e.target.className
    let message
    console.log(userValue)

    if(userValue === 'rock'){
        if(machineValue === 'rock'){
            message = 'Deu empate'
        }
        else if(machineValue === 'paper'){
            message = 'Alexa ganhou'
        }
        else {
            message = 'Você ganhou'
        }
    }

    if(userValue === 'paper'){
        if(machineValue === 'rock'){
            message = 'Você ganhou'
        }
        else if(machineValue === 'paper'){
            message = 'Deu empate'
        }
        else {
            message = 'Alexa ganhou'
        }
    }

    if(userValue === 'scissors'){
        if(machineValue === 'rock'){
            message = 'Alexa ganhou'
        }
        else if(machineValue === 'paper'){
            message = 'Você ganhou'
        }
        else {
            message = 'Deu empate'
        }
    }

    if(message === 'Você ganhou'){
        result.style.color = 'green'
        myScore++;
        yourScore.innerHTML = myScore;
    }
    if(message === 'Alexa ganhou'){
        result.style.color = 'red'
        alexaScore++;
        machineScore.innerHTML = alexaScore;
    }
    if(message === 'Deu empate'){
        result.style.color = 'blue'
    }
        
    result.style.display = 'block'
    result.innerHTML = message
    
}

function alexaPlays(){
    const min = 1;
    const max = 3;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    if(random === 1){
        return rock;
    }
    else if(random == 2){
        return paper;
    }
    else {
        return scissors;
    }
}

rock.addEventListener('click', userClick)
paper.addEventListener('click', userClick)
scissors.addEventListener('click', userClick)
