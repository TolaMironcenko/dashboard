const timeblock = document.querySelector('.time')

let intervalid = true

setInterval(() => {
    intervalid?timeblock.innerHTML = getTimeNow():timeblock.innerHTML = [getDateNow(), getWeekDayNow()].join('  ')
}, 1000)

const getTimeNow = () => {
    let date = new Date()
    let hours = date.getHours()
    if (hours < 10) hours = '0'+hours
    let minutes = date.getMinutes()
    if (minutes < 10) minutes = '0'+minutes
    let seconds = date.getSeconds()
    if (seconds < 10) seconds = '0'+seconds
    return [hours, minutes, seconds].join(':')
}

const getDateNow = () => {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    if (month < 10) month = '0'+month
    let day = date.getDate()
    if (day < 10) day = '0'+day
    return [day, month, year].join('.')
}

const getWeekDayNow = () => {
    let date = new Date()
    let weekdays = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return weekdays[date.getDay()-1]
}

timeblock.addEventListener('click', () => {
    intervalid = !intervalid
})
