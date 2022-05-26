
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
    


    const checkWin = () => {
        if(board[0] && allBoardTiles[0].innerHTML === "X" && board[1] && allBoardTiles[1].innerHTML === "X" && board[2] && allBoardTiles[2].innerHTML === "X"){
            console.log("player1 wins")
        }else if(board[3] && allBoardTiles[3].innerHTML === "X" && board[4] && allBoardTiles[4].innerHTML === "X" && board[5] && allBoardTiles[5].innerHTML === "X"){
            console.log("player1 wins")
        }else if(board[6] && allBoardTiles[6].innerHTML === "X" && board[7] && allBoardTiles[7].innerHTML === "X" && board[8] && allBoardTiles[8].innerHTML === "X"){
            console.log("player1 wins")
        }else if(board[0] && allBoardTiles[0].innerHTML === "X" && board[3] && allBoardTiles[3].innerHTML === "X" && board[6] && allBoardTiles[6].innerHTML === "X"){
            console.log("player1 wins")
        }else if(board[1] && allBoardTiles[1].innerHTML === "X" && board[4] && allBoardTiles[4].innerHTML === "X" && board[7] && allBoardTiles[7].innerHTML === "X"){
            console.log("player1 wins")
        }else if(board[2] && allBoardTiles[2].innerHTML === "X" && board[5] && allBoardTiles[5].innerHTML === "X" && board[8] && allBoardTiles[8].innerHTML === "X"){
            console.log("player1 wins")
        }else if(board[0] && allBoardTiles[0].innerHTML === "X" && board[4] && allBoardTiles[4].innerHTML === "X" && board[8] && allBoardTiles[8].innerHTML === "X"){
            console.log("player1 wins")
        }else if(board[2] && allBoardTiles[2].innerHTML === "X" && board[4] && allBoardTiles[4].innerHTML === "X" && board[6] && allBoardTiles[6].innerHTML === "X"){
            console.log("player1 wins")
        }
    }

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
                    if(e.target.innerHTML === "X" || e.target.innerHTML === "O"){
                        return
                    }else{
                        allBoardTiles[i].innerHTML= "X";
                        board[i] = "X"; 
                    }
                }
            }
            allBoardTiles.forEach(tile => {
                tile.removeEventListener("mouseup",placeX)
                tile.addEventListener("mouseup",placeO)
            });
        }
        checkWin()
        
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
                    if(e.target.innerHTML === "X" || e.target.innerHTML === "O"){
                        return
                    }else{
                    allBoardTiles[i].innerHTML= "O";
                    board[i] = "O";
                    }
                }
            }   
            allBoardTiles.forEach(tile => {
                tile.addEventListener("mouseup",placeX)
                tile.removeEventListener("mouseup",placeO)
            });
        }  
        checkWin()
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
    let allBoardTiles = document.querySelectorAll(".game-tile")
    console.log(allBoardTiles)
    // create two players

    let playerOne = createPlayer("playerOne");
    // playerOne.placeX();

    let playerTwo = createPlayer("playerTwo");
    // playerTwo.placeO();



    // compare === arr
        const equals = (a, b) =>
        a.length === b.length &&
        a.every((v, i) => v === b[i]);
        // create start
        if(equals(board,["","","","","","","","",""])){
            playerOne.placeX();
        }

})()