
// This is a module 
const gameBoard = (() => {
    const gameBoardContainer = document.querySelector(".game-board")
    let board = ["","","",
                 "","","",
                 "","",""];

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


const createPlayer = (name) => {

    let allBoardTiles = document.querySelectorAll(".game-tile")
    let board = gameBoard.board;
    

    // if place x put this event on all elements for 1 turn same for place o

    let placeX = (e) =>{
        allBoardTiles.forEach(tile => {
            tile.removeEventListener("mouseup",placeO)
            tile.addEventListener("mouseup",placeX)
        });

        if(!e){
            return
        }else{
            for(let i = 0; i<allBoardTiles.length; i++){
                if(e.target === allBoardTiles[i]){
                    if(e.target.value === "X" || e.target.value === "O"){
                        return
                    }else{
                        allBoardTiles[i].innerHTML= "X";
                        board[i] = "X"; 
                    }
                }
            }
        }
        
    }

    let placeO = (e) =>{
        allBoardTiles.forEach(tile => {
            tile.removeEventListener("mouseup",placeX)
            tile.addEventListener("mouseup",placeO)
        });
        if(!e){
            return
        }else{
            for(let i = 0; i<allBoardTiles.length; i++){
                if(e.target === allBoardTiles[i]){
                    if(e.target.value === "X" || e.target.value === "O"){
                        return
                    }else{
                    allBoardTiles[i].innerHTML= "O";
                    board[i] = "O";
                    }
                }
            }   
        }  
    }
    

    return{
        placeX,placeO,name,
    }
}



// GAMEFLOW MODULE

// start game render board
// create two players
// create start game
    // player one goes first with X
    // alternate x's and o's event listerners to stimulate turns
    // if 3 x's in a row or diag player one wins
    // if 3 o's in a row or diag player two wins
    // congratulations player _


const gameFlow = (() => {
    
    
    // render board
    const {displayBoard} = gameBoard;

    displayBoard()
    let board = gameBoard.board;
    // create two players

    let playerOne = createPlayer("playerOne");
    // playerOne.placeO();

    let playerTwo = createPlayer("playerTwo");
    // playerTwo.placeX();

    // create turn
    console.log(board)
    if(board){
        playerOne.placeX();
    }else{
        console.log("bye")
    }

    console.log(board)


})()