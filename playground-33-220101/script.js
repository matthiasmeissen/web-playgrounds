const navItems = document.querySelectorAll('nav a')
const sections = document.querySelectorAll('section')

let current = 0
let preventScroll = false

window.addEventListener('wheel', function (event) {
    if (preventScroll) {
        console.log('waiting')
    } else {
        if (event.deltaY > 10) {
            current += 1
            loopCurrent()
            delayScroll()
        } else if (event.deltaY < -10) {
            current -= 1
            loopCurrent()
            delayScroll()
        }
    }
    setNav()
})

const delayScroll = function () {
    setTimeout(function () {
        preventScroll = false
    }, 800)
    preventScroll = true
}

const loopCurrent = function () {
    if (current >= navItems.length) {
        current = 0
    } else if (current < 0) {
        current = navItems.length - 1
    }
}

const setNav = function () {
    navItems.forEach(navItem => {
        navItem.classList.remove('active')
    });

    sections.forEach(section => {
        section.classList.remove('active')
    });

    navItems[current].classList.add('active')

    sections[current].classList.add('active')
}

setNav()
