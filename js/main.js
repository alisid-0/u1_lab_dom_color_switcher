// Write your DOM code here!
let body = document.querySelector(`body`)

let red = document.querySelector('.red')
red.addEventListener('click', () => {
    body.style.backgroundColor ='red'
})

let white = document.querySelector('.white')
white.addEventListener('click', () => {
    body.style.backgroundColor ='white'
})

let blue = document.querySelector('.blue')
blue.addEventListener('click', () => {
    body.style.backgroundColor ='blue'
})

let yellow = document.querySelector('.yellow')
yellow.addEventListener('click', () => {
    body.style.backgroundColor ='yellow'
})

