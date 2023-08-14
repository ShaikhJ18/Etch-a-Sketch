const container = document.querySelector('#board')



function makeBoard(row,col){
    for (let i = 0; i < (row*col); i++){
        let div = document.createElement("div")
        div.style.backgroundColor = 'white'
        div.style.width = '50px'
        div.style.height = '50px'
        div.addEventListener("mouseover",()=>{
            div.style.backgroundColor = 'black'
        })
        container.style.gridTemplateColumns = `repeat(${row}, 0fr)`
        container.style.gridTemplateRows = `repeat(${col}, 0fr)`
        container.appendChild(div).classList.add('box')
}
}
let sizeOfBoard = prompt("How Big Do You Want The Board ? MAX 300","200")
makeBoard(sizeOfBoard,sizeOfBoard)