const boxes = document.getElementsByClassName('box')
const result = document.getElementById('result')
const resetBtn = document.getElementById('resetBtn')
const players = ['X','O']
let gameOver = false
let currentPlayer = players[0]
const winningConditions = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let XPlayer = []
let OPlayer = []
for (let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('click',()=>{
        if( gameOver || boxes[i].textContent!=='') return

        if(currentPlayer ==='X'){
            boxes[i].textContent = currentPlayer
            XPlayer.push(i)
            currentPlayer = 'O'
        }else{
            boxes[i].textContent = currentPlayer
            OPlayer.push(i)
            currentPlayer = 'X'
        }
        checkCondition()
    })
}

function checkCondition(){
    let winnner = null
    winningConditions.forEach((win)=>{
        if(win.every((pos)=> XPlayer.includes(pos))){
            winnner = 'X'
            gameOver = true
        }
    })
    winningConditions.forEach((win)=>{
        if(win.every((pos)=>OPlayer.includes(pos))){
            winnner = 'O'
            gameOver = true
        }
    })

    if(winnner){
        result.textContent = `${winnner} Player Wins`

    }else if (XPlayer.length+OPlayer.length === 9){
        result.textContent = 'Draw' 
    }
}
resetBtn.addEventListener('click',reset)
function reset(){
    XPlayer=[]
    OPlayer=[]
    currentPlayer = players[0]
    winner =  null
    gameOver = false
    for(let i=0;i<boxes.length;i++){
        boxes[i].textContent = ''
    }
    result.textContent=''
}