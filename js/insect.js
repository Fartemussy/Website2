const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementById('.start-btn')
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn')
const game_container = documet.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')

start_btn.addEventListener('click', () => {
    screens[0].classList.add('up')
})
