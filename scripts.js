// MAPEAMENTO DOS ELEMENTOS

const inputName = document.querySelector('.digite-name')
const userName = document.querySelector('.digitname')
let result = document.querySelector('.resultado')
const userScore = document.querySelector('.user-score')
const machineScore = document.querySelector('.machine-score') 

let userScoreNumber = 0
let machineScoreNumber = 0

// Variáveis dos botões
const buttonSubmit = document.querySelector('.submit')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissor = document.querySelector('.scissor')

// Função coletar nome do usuário e trocar no placar
function send(){

    if(inputName.value ===''){
        alert('Digite Seu Nome')
    }
    else{
       userName.innerHTML = inputName.value        
    }
}


function humanPlay(humanChoice){
        playTheGame(humanChoice,machinePlay())
}


function machinePlay(){
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)
    return choices[randomNumber]

}
 
function playTheGame(human,machine){
    console.log('human: ' + human + ' machine: ' + machine)

    if(human===machine){
        result.innerHTML = 'Deu Empate'
    }
    
    else if(
    human==='rock' && machine==='scissor' || 
    human==='paper' && machine==='rock' || 
    human==='scissor' && machine==='paper')
    {
        userScoreNumber++
        userScore.innerHTML = userScoreNumber
        result.innerHTML = 'Você Ganhou'
    }

    else{
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você Perdeu'
    }

}


// Função Reset

function reset(){
    userScore.innerHTML = '0'
    machineScore.innerHTML = '0'
    result.innerHTML = ''
}