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
function send() {

    if (inputName.value === '') {
        alert('Digite Seu Nome')
    }
    else {
        userName.innerHTML = inputName.value
    }
}

// Funções do Jogo

function humanPlay(humanChoice) {

    playTheGame(humanChoice, machinePlay())

    if (humanChoice === 'rock') {
        
       setTimeout(()=> {rock.style.transform = "translateY(-70%)"},10)
   
       console.log("movimentou?")

    }


    else if (humanChoice === 'paper') {
        setTimeout(()=>{paper.style.transform = "translateY(-70%)"},10)

    }

    else if (humanChoice === 'scissor') {
        setTimeout(()=>{scissor.style.transform = "translateY(-70%)"},10)
    }

   
}




function machinePlay() {
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    // }
    return choices[randomNumber]

}

function playTheGame(human, machine) {
    console.log('human: ' + human + ' machine: ' + machine)

    let userPlacar
    let machinePlacar

    if (human === machine) {
        result.innerHTML = 'Deu Empate'
    }

    else if (
        human === 'rock' && machine === 'scissor' ||
        human === 'paper' && machine === 'rock' ||
        human === 'scissor' && machine === 'paper') {

        userPlacar = setTimeout(
            userScoreNumber++,1000)


        userScore.innerHTML = userScoreNumber
        result.innerHTML = 'Você Ganhou'
    }

    else {
        machinePlacar = setTimeout(
            machineScoreNumber++,1000)

        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você Perdeu'
    }

}


// Função Reset

function reset() {

   

    userScore.innerHTML = '0'
    machineScore.innerHTML = '0'
    result.innerHTML = ''

    userScoreNumber = 0
    machineScoreNumber = 0

    rock.style.transform = 'translateY(0)'
    paper.style.transform = 'translateY(0)'
    scissor.style.transform = 'translateY(0)'
}
