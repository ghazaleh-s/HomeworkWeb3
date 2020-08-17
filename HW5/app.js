const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement=document.querySelector('[data-winning-message-text]');


const x_Class = 'x';
const circle_class = 'circle';
const winning_combinations = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

let circleTurn ;

startGame();

restartButton.addEventListener('click' , startGame);

function startGame() {
    circleTurn = false;
    cellElements.forEach(cell =>{
        cell.classList.remove(x_Class);
        cell.classList.remove(circle_class);
        cell.removeEventListener('click' , handleClick);
        //click once in a cell
        cell.addEventListener('click',handleClick,{once:true});
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}


function handleClick(e) {
    const cell = e.target; 
    const currentClass = circleTurn ? circle_class : x_Class;
    console.log(currentClass);
    //placeMark
    placeMark(cell, currentClass);
    //check for win

    if(checkWin(currentClass)){
        endGame(false);
        //check for a draw
    }else if (isDraw()){
        endGame(true);
    }else {
        // switch turns
        swapTurns();
        setBoardHoverClass();
    }
}


function endGame(draw) {
    if(draw){
        winningMessageTextElement.innerText = 'Draw!!';
    }else {
        winningMessageTextElement.innerText=`${circleTurn ? "O's" : "X's"} Wins!`;
    }
    winningMessageElement.classList.add('show');
}


function isDraw() {
     return [...cellElements].every(cell =>{
         return cell.classList.contains(x_Class) ||
             cell.classList.contains(circle_class);
     });
}


function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}


function swapTurns() {
    circleTurn = !circleTurn;
}


function setBoardHoverClass() {
    board.classList.remove(x_Class);
    board.classList.remove(circle_class);
    if(circleTurn){
        board.classList.add(circle_class);
    }else {
        board.classList.add(x_Class);
    }
}


function checkWin(currentClass) {
    return winning_combinations.some(combination =>{
        return combination.every(index =>{
            return cellElements[index].classList.contains(currentClass);
        })
    })
}