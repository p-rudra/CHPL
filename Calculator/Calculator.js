const result = document.getElementById('res')
let btn = document.querySelectorAll('.button')


btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        switch(button.value){
            case 'x':
                result.innerText+='*'
                break
            case '/':
                result.innerText+='/'
                break
            case '-':
                result.innerText+='-'
                break
            case '+':
                result.innerText+='+'
                break
            case 'C':
                result.innerText = ''
                break
            case '←':
                    result.innerText = result.innerText.slice(0,-1)
                break
            case '=':
                try{
                while(result.innerText.startsWith('0')){
                    result.innerText = result.innerText.replace('0','')
                }
                let ans = eval(result.innerText)
                result.innerText = parseFloat(ans.toString())
                }catch(error){
                    result.innerText="ERROR"
                }
                console.log(result.innerText)
                break
            default:
                let value = button.value
                result.innerHTML += value
        }
    })
})

