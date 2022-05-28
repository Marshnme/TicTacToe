
// This is a module 
const gameBoard = (() => {
    const gameBoardContainer = document.querySelector(".game-board")
    let gameTile = document.createElement("div");
    let endGameScreen = document.querySelector(".end-game-screen");
    let turnCounter = document.querySelector(".turn-counter")
    
    

    let board = ["","","",
                 "","","",
                 "","",""];
    let turn = 0;
    let displayBoard = function(){
        for(let i = 0; i<board.length; i++){
            gameTile = document.createElement("div")
            gameTile.textContent = board[i];
            gameTile.classList.add("game-tile",`game-tile-${i}`)
            gameBoardContainer.appendChild(gameTile)
        }
    }

    // let playerOne = createPlayer("playerOne");

    // const startGame = () => {
    //     const equals = (a, b) =>
    //     a.length === b.length &&
    //     a.every((v, i) => v === b[i]);
    //     // create start game
    //     if(equals(board,["","","","","","","","",""])){
    //         console.log("start")
    //         playerOne.placeX();
    //     }
    // }

    let restartBoard = () =>{
        let pageContainer = document.querySelector(".container");
        let allBoardTiles = document.querySelectorAll(".game-tile");
        board = ["","","",
                 "","","",
                 "","",""];
        turn = 0;
        turnCounter.innerHTML = `Turn: ${turn}`;
        for(let i = 0; i<board.length; i++){
            allBoardTiles[i].innerHTML = board[i];
        }
        endGameScreen.replaceChildren();
        pageContainer.classList.remove("blur");
        
    }

    return{
        displayBoard,board,turn,restartBoard,
    }
})();


const displayScreen = () => {
    let {restartBoard} = gameBoard

    let endGameScreen = document.querySelector(".end-game-screen");
    let endGameText = document.createElement("h2");
    let restartButton = document.querySelector(".restart-button");
    let pageContainer = document.querySelector(".container")

    // restartButton.addEventListener("click",restartBoard)
    console.log(restartButton)

    const playerWin = (winningText) =>{
        if(!winningText){
            return
        }else if(winningText === "Player One Wins!"){
            endGameText.textContent = winningText;
            endGameScreen.appendChild(endGameText);
            // endGameScreen.classList.remove()
            pageContainer = document.querySelector(".container")
            pageContainer.classList.add("blur")
            return "Player One Wins!"
        }else if (winningText === "Player Two Wins!"){
            endGameText.textContent = winningText;
            endGameScreen.appendChild(endGameText)
            
            pageContainer = document.querySelector(".container")
            pageContainer.classList.add("blur")
            return "Player Two Wins!"
        }
    }

    const tie = (tieMessage) =>{
        endGameText.textContent = tieMessage;
        endGameScreen.appendChild(endGameText)
        endGameScreen.appendChild(restartButton);
        pageContainer = document.querySelector(".container")
        pageContainer.classList.add("blur")
        return "Tie Game!"
    }



    
    return{
        playerWin,tie,restartButton,
    }
    
}


const createPlayer = (name) => {

    let allBoardTiles = document.querySelectorAll(".game-tile")
    let turnCounter = document.querySelector(".turn-counter")
    let board = gameBoard.board;
    let turn = gameBoard.turn;


    let {playerWin,tie} = displayScreen()
    


    const checkWin = () => {
        // ALL OF X'S WINNING CONDITIONS
        if(board[0] && allBoardTiles[0].innerHTML === "X" && board[1] && allBoardTiles[1].innerHTML === "X" && board[2] && allBoardTiles[2].innerHTML === "X"){
            return true
        }else if(board[3] && allBoardTiles[3].innerHTML === "X" && board[4] && allBoardTiles[4].innerHTML === "X" && board[5] && allBoardTiles[5].innerHTML === "X"){
            return true
        }else if(board[6] && allBoardTiles[6].innerHTML === "X" && board[7] && allBoardTiles[7].innerHTML === "X" && board[8] && allBoardTiles[8].innerHTML === "X"){
            return true
        }else if(board[0] && allBoardTiles[0].innerHTML === "X" && board[3] && allBoardTiles[3].innerHTML === "X" && board[6] && allBoardTiles[6].innerHTML === "X"){
            return true
        }else if(board[1] && allBoardTiles[1].innerHTML === "X" && board[4] && allBoardTiles[4].innerHTML === "X" && board[7] && allBoardTiles[7].innerHTML === "X"){
            return true
        }else if(board[2] && allBoardTiles[2].innerHTML === "X" && board[5] && allBoardTiles[5].innerHTML === "X" && board[8] && allBoardTiles[8].innerHTML === "X"){
            return true
        }else if(board[0] && allBoardTiles[0].innerHTML === "X" && board[4] && allBoardTiles[4].innerHTML === "X" && board[8] && allBoardTiles[8].innerHTML === "X"){
            return true
        }else if(board[2] && allBoardTiles[2].innerHTML === "X" && board[4] && allBoardTiles[4].innerHTML === "X" && board[6] && allBoardTiles[6].innerHTML === "X"){
            return true
        }
        // ALL OF O'S WINNING CONDITIONS
        else if(board[0] && allBoardTiles[0].innerHTML === "O" && board[1] && allBoardTiles[1].innerHTML === "O" && board[2] && allBoardTiles[2].innerHTML === "O"){
            return true
        }else if(board[3] && allBoardTiles[3].innerHTML === "O" && board[4] && allBoardTiles[4].innerHTML === "O" && board[5] && allBoardTiles[5].innerHTML === "O"){
            return true
        }else if(board[6] && allBoardTiles[6].innerHTML === "O" && board[7] && allBoardTiles[7].innerHTML === "O" && board[8] && allBoardTiles[8].innerHTML === "O"){
            return true
        }else if(board[0] && allBoardTiles[0].innerHTML === "O" && board[3] && allBoardTiles[3].innerHTML === "O" && board[6] && allBoardTiles[6].innerHTML === "O"){
            return true
        }else if(board[1] && allBoardTiles[1].innerHTML === "O" && board[4] && allBoardTiles[4].innerHTML === "O" && board[7] && allBoardTiles[7].innerHTML === "O"){
            return true
        }else if(board[2] && allBoardTiles[2].innerHTML === "O" && board[5] && allBoardTiles[5].innerHTML === "O" && board[8] && allBoardTiles[8].innerHTML === "O"){
            return true
        }else if(board[0] && allBoardTiles[0].innerHTML === "O" && board[4] && allBoardTiles[4].innerHTML === "O" && board[8] && allBoardTiles[8].innerHTML === "O"){
            return true
        }else if(board[2] && allBoardTiles[2].innerHTML === "O" && board[4] && allBoardTiles[4].innerHTML === "O" && board[6] && allBoardTiles[6].innerHTML === "O"){
            return true
        }else{
            return false
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
        turn += 1;
        turnCounter.innerHTML = `Turn: ${turn}`;
        if(checkWin() === true){
            
            allBoardTiles.forEach(tile => {
                tile.removeEventListener("mouseup",placeX)
                tile.removeEventListener("mouseup",placeO)
            });
            return playerWin("Player One Wins!")
        }else if(turn === 9 && checkWin() === false){
            allBoardTiles.forEach(tile => {
                tile.removeEventListener("mouseup",placeX)
                tile.removeEventListener("mouseup",placeO)
            });
            return tie("Tie Game!")
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
        turn += 1;
        turnCounter.innerHTML = `Turn: ${turn}`;
        if(checkWin() === true){
            
            allBoardTiles.forEach(tile => {
                tile.removeEventListener("mouseup",placeX)
                tile.removeEventListener("mouseup",placeO)
            });
            return playerWin("Player Two Wins!")
        }else if(turn === 9 && checkWin() === false){
            allBoardTiles.forEach(tile => {
                tile.removeEventListener("mouseup",placeX)
                tile.removeEventListener("mouseup",placeO)
            });
            return tie("Tie Game!")
        }
    }
    

    return{
        placeX,checkWin,
    }
}



// GAMEFLOW MODULE

// start game render board
// create two players
// create start game
    // player one goes first with X
    // alternate x's and o's event listerners to stimulate turns
    // win conditions moved to createPlayer factory
    // congratulations player _


const gameFlow = (() => {
    // render board
    const {displayBoard,restartBoard} = gameBoard;
    // let {restartButton} = displayScreen()
    let restartButton = document.querySelector(".restart-button");
    console.log(restartButton)
    console.log(restartBoard)
    displayBoard()
    let board = gameBoard.board;
    let allBoardTiles = document.querySelectorAll(".game-tile")
    // create two players

    let playerOne = createPlayer("playerOne");
    // playerOne.placeX();

    let playerTwo = createPlayer("playerTwo");
    // playerTwo.placeO();

    // compare === arr
    const startGame = () => {
        const equals = (a, b) =>
        a.length === b.length &&
        a.every((v, i) => v === b[i]);
        // create start game
        restartButton.addEventListener("click",restartGame)
        console.log(board)
        if(equals(board,["","","","","","","","",""])){
            playerOne.placeX();
        }else{
            console.log("fuckin broke")
        }
    }

    let restartGame = () => {
        restartBoard();
        // board = ["","","",
        //          "","","",
        //          "","",""];
        //          turn= 0;
        startGame();
    }
    
    startGame()
    
    


    // win screen function
    

    return {}
})();