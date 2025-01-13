let items = []
const text = document.querySelector("#text")
const list = document.querySelector("#list")
const createBtn = document.querySelector("#butn")
let currentIndex = null
function addList(){
    if (text.value === ""){
        return 
    }else if(currentIndex!==null){
        items[currentIndex] = text.value
        currentIndex =  null
    }   
    else{
        items.push(text.value)
        text.value=""
    }
    showList()
}

function showList(){
    let newHtml = ""
    items.forEach((item,index)=>{
        newHtml+=`<p id=${index}>${item}<button onClick="deleteElement(${index})">Delete</button><button onClick="updateElement(${index})">Update</button></p><br>`
    })
    list.innerHTML=newHtml
}
function deleteElement(index){
    if(items.length === 1){
        items = []
    }
    items.splice(index,1)
    let deleteElement = document.getElementById(index)
    deleteElement.remove()
}
function updateElement(index){
    currentIndex =  index
    text.value = items[index]
}
createBtn.addEventListener('click',addList)