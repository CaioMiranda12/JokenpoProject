const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const result = document.querySelector('.result')
const yourScore = document.querySelector('.your-score')
const machineScore = document.querySelector('.machine-score')

let myScore = 0;
let alexaScore = 0;

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

function userClick(e){
    const machineValue = alexaPlays().className
    const userValue = e.target.className
    let message

    if(userValue === 'rock'){
        if(machineValue === GAME_OPTIONS.ROCK){
            message = 'Deu empate'
        }
        else if(machineValue === GAME_OPTIONS.PAPER){
            message = 'Alexa ganhou'
        }
        else {
            message = 'Você ganhou'
        }
    }

    if(userValue === GAME_OPTIONS.PAPER){
        if(machineValue === GAME_OPTIONS.ROCK){
            message = 'Você ganhou'
        }
        else if(machineValue === GAME_OPTIONS.PAPER){
            message = 'Deu empate'
        }
        else {
            message = 'Alexa ganhou'
        }
    }

    if(userValue === GAME_OPTIONS.SCISSORS){
        if(machineValue === GAME_OPTIONS.ROCK){
            message = 'Alexa ganhou'
        }
        else if(machineValue === GAME_OPTIONS.PAPER){
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
    const min = 0;
    const max = 2;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

    return choices[random]
}

rock.addEventListener('click', userClick)
paper.addEventListener('click', userClick)
scissors.addEventListener('click', userClick)
