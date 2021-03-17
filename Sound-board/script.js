const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory']
const buttons = document.getElementById('buttons')

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    buttons.appendChild(btn)

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play()

    })
})

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound)
        song.pause();
        song.currentTime = 0;
    })
}
