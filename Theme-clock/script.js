const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')


const days = ["sunday", "monday", "tuesday", "whednesday", "thursday", "friday", "saturday"];
const months = ["jan", "feb", "mar", "apr", "may", "june", "july", "august", "sep", "oct", "nov", "dec"]


toggle.addEventListener("click", (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerText = "Dark Mode"
    } else {
        e.target.innerText = "Light Mode"
        html.classList.add('dark')
    }
})


function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    timeEl.innerHTML = `${hoursClock < 10 ? `0${hoursClock}` : hoursClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`


    //scalling map for rotating niddle

    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers?answertab=votes#tab-top
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    // theme clock
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursClock, 0, 11, 0, 360)}deg)`

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

}

setTime()
setInterval(() => {
    setTime()
}, 1000)
