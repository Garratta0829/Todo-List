import './style.css';


const panel = document.getElementById('panel')
const board = document.getElementById('board')
const test = document.createElement('h1')
test.innerHTML = 'Test'
panel.appendChild(test)

const run = document.createElement('h1')
run.innerHTML = 'Run'
board.appendChild(run)

function logConsole() {
    console.log('yo')
}

logConsole()