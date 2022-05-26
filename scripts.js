
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
    
    let selectTile = function(e,tileMarker){
        console.log("this",this)
        console.log("marker",tileMarker)
        if(!tileMarker){
            return
        }else{
        for(let i = 0; i<allBoardTiles.length; i++){
            if(this === allBoardTiles[i]){
                allBoardTiles[i].innerHTML= tileMarker;
                board[i] = tileMarker; 
                }
            }
        }
    }

    

    let placeX = (X = "X") =>{
        selectTile(X)
    }

    let placeO = (O = "O") =>{
        selectTile(O)
    }

    allBoardTiles.forEach(tile => {
        tile.addEventListener("mouseup",selectTile)
    });
    

    return{
        selectTile,placeX,placeO,
    }
}

let playerOne = createPlayer();
playerOne.placeO();
