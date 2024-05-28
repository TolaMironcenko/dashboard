const searchinput = document.querySelector('#search-in-google')

searchinput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        let searchvalue = searchinput.value
        window.location.replace(`https://google.com/search?q=${searchvalue}`)
    }
})
