const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')
const audioPlayer = document.querySelector('#audio-player')
const image = document.querySelector('#img')
const songName = document.querySelector('#songName')
let index = 0
const playlist = [
    {
        name:'Song-1',
        src:'audio1.mp3',
        img:'img1.jpg'
    },
    {
        name:'Song-2',
        src:'audio2.mp3',
        img:'img2.jpg'
    },
    {
        name:'Song-3',
        src:'audio3.mp3',
        img:'img3.jpg'
    },
    {
        name:'Song-4',
        src:'audio4.mp3',
        img:'img4.jpg'
    }
]

function previousPlay(){
    if(index === 0){
        index = playlist.length-1
        const {name,img,src} = playlist[index]
        image.src = img
        audioPlayer.src = src
        songName.textContent = name
    }else{
        index = index-1
        const {name,img,src} = playlist[index]
        image.src = img
        audioPlayer.src = src
        songName.textContent = name
    }
}

prevBtn.addEventListener('click',previousPlay)
function nextPlay(){
    if(index === playlist.length-1){
        index = 0
        const {name,img,src} = playlist[index]
        image.src = img
        audioPlayer.src = src
        songName.textContent = name
    }else{
        index = index+1
        const {name,img,src} = playlist[index]
        image.src = img
        audioPlayer.src = src
        songName.textContent = name
    }
}
nextBtn.addEventListener('click',nextPlay)
