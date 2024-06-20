console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Warriyo - Mortalis", filePath: "1.mp3",coverPath: "prabh.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "1.mp3",coverPath: "prabh.jpg"},
    {songName: "DEAF KEV - Invincible[NCS Release]-320k", filePath: "1.mp3",coverPath: "prabh.jpg"},
    {songName: "Different Heaven & EHIDE - My Heart[NCS Released]", filePath: "1.mp3",coverPath: "prabh.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-johnning-NCS-Release", filePath: "1.mp3",coverPath: "prabh.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "1.mp3",coverPath: "prabh.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "1.mp3",coverPath: "prabh.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "1.mp3",coverPath: "prabh.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "1.mp3",coverPath: "prabh.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "1.mp3",coverPath: "prabh.jpg"},
]

  songs.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

  })
// .audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0; 
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songListPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${index+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})