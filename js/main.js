// Write your DOM code here!

let body = document.querySelector(`body`)
let red = document.querySelector('.red')
let white = document.querySelector('.white')
let blue = document.querySelector('.blue')
let yellow = document.querySelector('.yellow')

colors = [red, white, blue, yellow]
colorString = ['red','white','blue', 'yellow']

for (let i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', () => {
        body.style.backgroundColor = `${colorString[i]}`
    })
}
