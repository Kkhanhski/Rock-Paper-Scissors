function getComputerChoice() {
    var result = Math.floor(Math.random() * 3);
    switch(result) {
        case 0:
            return {
                id: 0,
                name: "Scissors"
            }
            break;
        case 1:
            return {
                id: 1,
                name: "Paper"
            }
            break;
        case 2:
            return {
                id: 2,
                name: "Rock"
            }
            break;
    }
}

function fight(playerSelection, computerSelection) {
    
    if((playerSelection.id == 0 && computerSelection.id ==2) || (playerSelection.id == 2 && computerSelection.id == 0) ) {
        if(playerSelection.id == 2) {
            playerSelection.id = -2;
        } else {
            computerSelection.id = -2;
        }
    }
    if(playerSelection.id === computerSelection.id) {
        return `You DRAW! ${playerSelection.name} equal ${computerSelection.name}`
    }
    else if(playerSelection.id < computerSelection.id) {
        playerPoint++
        return `You WIN! ${playerSelection.name} beats ${computerSelection.name}`
    } else {
        computerPoint++
        return `You LOSE! ${computerSelection.name} beats ${playerSelection.name}`
    }
}
// variable
var btns = document.querySelectorAll(".btn")
var result = document.getElementById('result')
var pPoint = document.getElementById('player-point')
var cPoint = document.getElementById('computer-point')
var playerPoint = 0, computerPoint = 0;
var modal = document.querySelector('.modal')


for(var btn of btns) {

    btn.onclick = function() {
        var playerSelection = JSON.parse(this.value)
        var _result = fight(playerSelection, getComputerChoice())

        result.innerText = _result;
        if(playerPoint === 5 || computerPoint === 5) {
            pPoint.innerText = playerPoint;
            cPoint.innerText = computerPoint;
            if(playerPoint === 5) {
                modal.querySelector('p').innerText = 'win'
                modal.style.display = 'flex';
            } else {
                modal.querySelector('p').innerText = 'lose'
                modal.style.display = 'flex';
            }
        } else {
            pPoint.innerText = playerPoint;
            cPoint.innerText = computerPoint;
        }
    }
}
modal.addEventListener('click', function() {
    playerPoint = 0;
    computerPoint = 0;
    modal.style.display = 'none';
    pPoint.innerText = playerPoint;
    cPoint.innerText = computerPoint;
})