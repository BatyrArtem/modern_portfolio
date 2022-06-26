const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const musicTitle = document.querySelector('.glows')
// const get = element => document.querySelector(element)

// const musicContainer = get('.music-container')
// const playBtn = get('#play')
// const prevBtn = get('#prev')
// const nextBtn = get('#next')
// const audio = get('#audio')
// const progress = get('.progress')
// const progressContainer = get('.progress-container')
// const title = get('#title')
// const cover = get('#cover')
// const musicTitle = get('.glows')

//Song titles
const songs = ['Croatian_rapsody', 'Moonlight-Beethoven', 'Angels-Mozart',
    'Nutcracker-Tchaikovsky', 'Piano-Amelie', 'Swan_lake-Tchaikovsky', 'Time_back-Nightcore', 'Una_mattina-Einaudi']

let changeBackground = true
let firstPressPlay = true
let changeBackgroundPause = false

//keep track of songs

let songIndex = 7

//Initially  load song info DOM

loadSong(songs[songIndex])

//Update song details

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `./img/img-for-music/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
    musicTitle.classList.add('glows-play')
    changeBackgroundPause = false
    if(firstPressPlay) {
        firstPressPlay = false
        changeBackgroundPause = false
        changeBackgrounTitleInterval()
    }
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    audio.pause()
    musicTitle.classList.remove('glows-play')
    changeBackgroundPause = true
}

function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex = songs.length - 1 
    }

    loadSong(songs[songIndex])
    playSong()
}

function nextSong() {
    songIndex++

    if(songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
    
}

function changeBackgrounTitleInterval() {
        setInterval(x => {
            if(!changeBackgroundPause) {
                if(changeBackground) {
                    changeBackground = !changeBackground
                    musicTitle.classList.add('glows-play')
                }
                else {
                    changeBackground = !changeBackground
                    musicTitle.classList.remove("glows-play")
                }
            }
        }, 1500)
}

//event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

//change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)