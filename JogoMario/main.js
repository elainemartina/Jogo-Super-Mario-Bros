const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameOverScreen = document.querySelector('.game-over-screen')
const clouds = document.querySelector('.clouds')
const audioGameOver = document.querySelector(".audioGameOver")
const invisibleButton = document.getElementById('invisible-button')
const yoshi = document.getElementById('yoshi')

let yoshiJumped = false;

const jump = () => {
    if (yoshiJumped) {
        mario.classList.add('jumphigher');
        setTimeout(() => {
            mario.classList.remove('jumphigher');
        }, 1000);
    } else {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

const showInvisibleButton = () => {
    invisibleButton.classList.remove('invisible')
}

const hideYoshiButton = () => {
    yoshi.classList.add('invisible')
}

yoshi.addEventListener('click', () => {

    yoshiJumped = true;
    mario.src = './img/yoshi.gif'
    mario.style.width = '135px'
    mario.style.marginLeft = '50px'
    setTimeout(() => {
 
    }, 1000);
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = +window.getComputedStyle(clouds).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > -10 && marioPosition <= 67) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        clouds.style.animation = 'none';
        clouds.style.bottom = `${cloudsPosition}px`

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        gameOverScreen.classList.add('show-image');
        showInvisibleButton()
        hideYoshiButton()
        audioGameOver.play()

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)




