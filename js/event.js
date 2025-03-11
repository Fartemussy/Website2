const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')

element1.addEventListener('click', ()=>{
    element1.innerHTML = "Ow! Don't double click me please."
})

element1.addEventListener('dblclick', ()=>{
    element1.innerHTML = "STOP CLICKING ME!! PLEASE!"
})

element2.addEventListener('mouseover', ()=>{
    element2.style.color = "black"
    element2.style.backgroundColor = "white"
})

element2.addEventListener('mouseout', ()=>{
    element2.style.color = "black"
    element2.style.backgroundColor = "white"
})

let positionY = 15;
let positionX = 15;

document.addEventListener('keyup', (event)=>{
    console.log(event.key)

    if (event.key == 'ArrowDown') {
        positionY = positionY + 43
    }
    else if (event.key == 'ArrowUp') {
        positionY = positionY - 43
    }
    else if (event.key == 'ArrowLeft') {
        positionX = positionX + 43
    }
    else if (event.key == 'ArrowRight') {
        positionX = positionX - 43
    }
    element3.style.top = `${positionY}px`
    element3.style.right = `${positionX}px`

})

element4.addEventListener('click', ()=>{
    element4.style.width = "100px"
    element4.style.height = "50px"
    element4.innerHTML = "PRESS 'k' PLEASE"
    element.style.opacity = 1
})

document.addEventListener('keyup', (event)=>{
    if (event.key == 'k') {
        element4.style.width = "250px"
        element4.style.height = "100px"
        element4.innerHTML = "<h4>Click me to make me tiny <br> Press 'k' to bring me back.</h4>"
        element.style.opacity = 1
    }
})


const list = ['running', 'paused']
let index = 0
element5.addEventListener('click', ()=>{
    element5.innerHTML = "<h4>ahhh I'm spinning</h4>"
    element5.style.animationPlayState = list[index]
    index = (index + 1) % 2
})

