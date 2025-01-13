const dice =  document.querySelector('#img')
const butn = document.querySelector('#butn')
butn.addEventListener('click',rollDice)
function rollDice(){
    let number = Math.floor(Math.random()*6)+1
    dice.setAttribute('src',`dice${number}.png`)
}

