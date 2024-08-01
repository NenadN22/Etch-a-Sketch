const container = document.getElementsByClassName('container')
let  playerPrompt;

function createGrid(squares) {
    
    for(let i = 0;  i < squares * squares; i++ ) {
        let square = document.createElement('div');
        square.classList.add('square');
        container[0].appendChild(square);
        console.log(squares)
        square.style.width = `calc(100% / ${squares})`
        square.style.height = `calc(100% / ${squares})`
        console.log('hi')
        
        square.addEventListener('mouseover',() => {
            square.classList.add('colored')
            square.style.backgroundColor = 'black'
            })
        }
        

       
    }
    
let gridButton = document.getElementsByClassName('square-button');
function promptGrid() {
    playerPrompt = prompt('How many grids do you want? From 1 to 100!')
    createGrid(playerPrompt)
}


