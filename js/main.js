// Write your DOM code here!
let body = document.querySelector(`body`)

let red = document.querySelector('.red')
// red.addEventListener('click', () => {
//     body.style.backgroundColor ='red'
// })

let white = document.querySelector('.white')
// white.addEventListener('click', () => {
//     body.style.backgroundColor ='white'
// })

let blue = document.querySelector('.blue')
// blue.addEventListener('click', () => {
//     body.style.backgroundColor ='blue'
// })

let yellow = document.querySelector('.yellow')
// yellow.addEventListener('click', () => {
//     body.style.backgroundColor ='yellow'
// })

colors = [red, white, blue, yellow]
colorString = ['red','white','blue', 'yellow']

// const colorSwitch = colors.forEach(i =>{
//     i.addEventListener('click', () => {
//         body.style.backgroundColor = `${colorString[i]}`
//         console.log(colorString[i])
//     })
// })

for (let i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', () => {
        body.style.backgroundColor = `${colorString[i]}`
    })
}
