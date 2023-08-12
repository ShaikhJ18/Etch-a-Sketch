const container = document.querySelector('#board')

let row = 200
let col = 200
for (let i = 0; i < (row*col); i++){
    let div = document.createElement("div")
    div.style.backgroundColor = 'white'
    div.style.width = '1px'
    div.style.height = '1px'
    container.style.gridTemplateColumns = `repeat(${row}, 1fr)`
    container.style.gridTemplateRows = `repeat(${col}, 1fr)`
    container.appendChild(div).classList.add('box')
}