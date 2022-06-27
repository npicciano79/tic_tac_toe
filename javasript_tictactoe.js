/*---------------objects,variables-----------------------*/
const game={
    xTurn:true,
    totalMoves:[],
    xMoves:[],
    oMoves:[],
    winningMoves:[
        //rows
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        //columns
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        //diagonal
        ['0','4','8'],
        ['2','4','6']
    ]

}


//currentPlayer variable
let gamePiece='X'

/*----------------querySelectors---------------*/
const cells=document.querySelectorAll('.gridcell')
const gameStatus=document.querySelector('.gameStatus')
const resetButton=document.querySelector('.resetBtn')


/*--------------Event listeners----------------*/
//square click event, calls squareClick function
for (let i=0;i<cells.length;i++){
    cells[i].addEventListener('click',()=>{
        gameDriver(i)
    },{once:true})

}


resetButton.addEventListener('click',()=>{
    gameReset()
})


/*---------------Functions-------------------------*/
//displays inital player message
currentPlayerTurn(gamePiece)

function gameDriver(i){
    //display gamepiece
    gameDisplay(i,gamePiece)
    playerSet(i,gamePiece)

    if(winnerCheck(gamePiece)){
        endGame(gamePiece)
    }else{
        //switch piece
        playerSwitch()
        currentMove()
        currentPlayerTurn(gamePiece)
    }  
}

function endGame(gamePiece){
    gameStatus.innerHTML=gamePiece+' has won, congratulations.'
}




//display gamePiece
function gameDisplay(i){
    cells[i].innerHTML=gamePiece
}

//function to add move to player array
//add to array based on xTurn value
function playerSet(i,gamePiece){
    //xplayer moves
    if (gamePiece=='X'){
        game.xMoves.push(i)
        console.log("x:"+ game.xMoves)
    }else{
        game.oMoves.push(i)
        console.log("O:"+game.oMoves)
    }
    game.totalMoves.push(i)
    console.log("total moves:"+game.totalMoves)
}

//winner test
function winnerCheck(gamePiece){
   
    sq0=document.getElementById('0').innerText
    sq1=document.getElementById('1').innerText
    sq2=document.getElementById('2').innerText
    sq3=document.getElementById('3').innerText
    sq4=document.getElementById('4').innerText
    sq5=document.getElementById('5').innerText
    sq6=document.getElementById('6').innerText
    sq7=document.getElementById('7').innerText
    sq8=document.getElementById('8').innerText
    if (
        sq0 && sq1 && sq2 ||
        sq3 && sq4 && sq5 ||
        sq6 && sq7 && sq8 ||
        sq0 && sq3 && sq6 ||
        sq2 && sq5 && sq8 ||
        sq0 && sq4 && sq8 ||
        sq2 && sq4 && sq6 
    ){
        return true
    }else{
        return false
    }



    /*
    let e=0
    for (let i=0;i<game.winningMoves.length-1;i++){
        for (let j=0;j<=2;j++){
            if (cells[game.winningMoves[i][j]]==='X'){
                e++
            }
            if (e===3){
                console.log('x wins')
            }

        }
    }

*/

}
    





//if no winner, switch player
//playerSwitch- toggles xTurn true/false
function playerSwitch(){
    game.xTurn=!game.xTurn
    console.log("turn"+game.xTurn)
     
}

//switch gamepiece based on player
function currentMove(){
    if (game.xTurn==true){
        gamePiece='X'
    }else{
        gamePiece='O'
    }
    console.log("gamepiece: "+gamePiece)
}

function currentPlayerTurn(gamePiece){
    gameStatus.innerHTML=`It's player ${gamePiece}'s turn.`
}
/*

/*
function gameDriver(i){
    console.log(i)
    //display players move
    //

    //disableCell(i)
    //playerSet(i,gamePiece)
    //winTest(gamePiece)
    //playerSwitch()
    //currentMove()
    //currentPlayerTurn(gamePiece)

}









function gameReset(){
    console.log('hit')
}











let playerTurn=function switchPlayer(tempPlayer){
    if(tempPlayer==0){
        localStorage.setItem('playerCounter',1)
    }else{
        localStorage.setItem('playerCounter',0)
    }
}

//display gameboard
//check if player1(X) or player2(0)
//displays X or 0 on screen  
function gameBoardDisplay(i){
    //let tempPlayer=localStorage.getItem('playerCounter')
    //console.log(players[tempPlayer])
    gridSquare[i].innerHTML=player1
    return switchPlayer(tempPlayer)
}


//create array of moves
function boardPlacement(i){
    boardPlacement_Moves.push(i)
    //console.log(boardPlacement_Moves)


}



//set player1 or player2
function playerSet(){
    let currentPlayer=localStorage.getItem('playerCounter')
}

const gameBoard={
    gameboard:['x','o','x','o','x','o','x','o','x']

    //gameboard function
}

//displays message on invalid selection 


//test if selection is valid
//not in use
function isValid(i){
    if(remainingSquares.includes(i)){
        const index=remainingSquares.indexOf(i)
        remainingSquares.splice(index,1)
    }else{
        alert('invalid selection')
    }
   
}

function clickTurn()



//main driver 


        getcurrentPlayer()
        gameBoardDisplay(i)
        
        //array of moves 
        //boardPlacement(i)
    
        //set player1 or player2
        //playerSet()


//set first player on window load
window.onload=localStorage.setItem('playerCounter',0)
let boardPlacement_Moves=[]
let remainingSquares=[0,1,2,3,4,5,6,7,8,9]


//declares and sets player1 and player2
//sets name, moves array and gamepiece
function playerMain(name, moves,gamepiece,turnKey){
    this.name=name
    this.moves=moves
    this.gamepiece=gamepiece
    this.turnKey=turnKey
    this.setPlayer = function(){
        let currentPlayer=player1
        //console.log(initialplayerTurn)
    }
}
const player1=new playerMain('player1',[],'X','0')
const player2= new playerMain('player2',[],'0','1')
*/