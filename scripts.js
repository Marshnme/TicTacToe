
// This is a module 
const gameBoard = (() => {
    const gameBoardContainer = document.querySelector(".game-board")
    let board = ["O","X","X",
                 "X","O","X",
                 "O","X","O"];

    let displayBoard = function(){
        for(let i = 0; i<board.length; i++){
            let gameTile = document.createElement("div")
            gameTile.textContent = board[i];
            gameTile.classList.add("game-tile",`game-tile-${i}`)
            gameBoardContainer.appendChild(gameTile)
        }
    }

    return{
        displayBoard,board,
    }
})();

gameBoard.displayBoard()

const createPlayer = () => {
    let allBoardTiles = document.querySelectorAll(".game-tile")
    let board = gameBoard.board;
    

    // if place x put this event on all elements for 1 turn same for place o

    let placeX = (e) =>{
        allBoardTiles.forEach(tile => {
            tile.removeEventListener("mouseup",placeO)
            tile.addEventListener("mouseup",placeX)
        });
        for(let i = 0; i<allBoardTiles.length; i++){
            if(e.target === allBoardTiles[i]){
                allBoardTiles[i].innerHTML= "X";
                board[i] = "X"; 
                }
            }
    }

    let placeO = (e) =>{
        allBoardTiles.forEach(tile => {
            tile.removeEventListener("mouseup",placeX)
            tile.addEventListener("mouseup",placeO)
        });
        for(let i = 0; i<allBoardTiles.length; i++){
            if(e.target === allBoardTiles[i]){
                allBoardTiles[i].innerHTML= "O";
                board[i] = "O";
                }
            }   
    }
    

    return{
        placeX,placeO,
    }
}

let playerOne = createPlayer();
playerOne.placeO();
