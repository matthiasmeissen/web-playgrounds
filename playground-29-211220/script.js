const logoTag = document.querySelector('.logo')
const navItems = document.querySelectorAll('nav a')
const sections = document.querySelectorAll('section')

const logoHeight = logoTag.clientHeight

window.addEventListener('scroll', function () {
    const logoSize = 1 - (window.scrollY / logoHeight)
    logoTag.style.fontSize = Math.max(4, (logoSize * 14)) + 'vw'

    checkScroll()
})

const checkScroll = function () {
    const distance = window.scrollY + 200

    if (distance > sections[5].offsetTop) {
        setNavigation('Kontakt')
    } else if (distance > sections[4].offsetTop) {
        setNavigation('Kollaborationen')
    } else if (distance > sections[3].offsetTop) {
        setNavigation('Projektleitung')
    } else if (distance > sections[2].offsetTop) {
        setNavigation('Themen')
    } else if (distance > sections[1].offsetTop) {
        setNavigation('Konzept')
    } else if (distance > sections[0].offsetTop) {
        setNavigation('Intro')
    } else {
        setNavigation('')
    }
}

const setNavigation = function (active) {
    navItems.forEach(navItem => {
        navItem.classList.remove('active')
        if (navItem.innerHTML == active) {
            navItem.classList.add('active')
        }
    });
}
