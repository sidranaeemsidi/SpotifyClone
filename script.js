console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {SongName: "Dill Ki lagi -Nazia Hasan", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {SongName: "Qayamat", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {SongName: "Bharam ost", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {SongName: "Let Me Love You", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {SongName: "Yallan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {SongName: "Ve Ranja -Neha Kakar", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {SongName: "Yesh Mera Dewanapan ost", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {SongName: "Soch -punjabi song", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {SongName: "Nabaz punjabi song", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"}
]
songItem.forEach((element, i)=>{
   // console.log( element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].SongName;
})
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click' , function fun(){
   if( audioElement.paused || audioElement.currentTime<=0){
     audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});
//listen to event
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
});
const makeAllPlays= ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
})
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        //console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=8){
            songIndex = 0;
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 8;
        }
        else{
            songIndex -=1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    