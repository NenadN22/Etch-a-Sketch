const container = document.getElementsByClassName('container')
function createGrid(squares) {
    for(let i = 0;  i < squares * squares; i++ ) {
        let square = document.createElement('div');
        square.classList.add('square');
        container[0].appendChild(square);
        console.log(squares)
        square.style.width = `calc(100% / ${squares})`
        square.style.height = `calc(100% / ${squares})`
        
        square.addEventListener('mouseover',() => {
            square.style.backgroundColor = 'blue'
            })
        }
       
    }
    




createGrid(5);
