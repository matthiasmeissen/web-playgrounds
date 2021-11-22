const sections = document.querySelectorAll('section')
const bodyTag = document.querySelector('body')

let currentScroll = 0
let lastScroll = 0

window.addEventListener('scroll' , function () {
    changeColors()
})

const changeColors = function () {
    if (window.scrollY < sections[1].offsetTop) {
        bodyTag.style.backgroundColor = '#e3e3e3'
    } else if (window.scrollY < sections[2].offsetTop) {
        bodyTag.style.backgroundColor = '#f257ce'
    } else if (window.scrollY < sections[3].offsetTop) {
        bodyTag.style.backgroundColor = '#5f57f2'
    } else if (window.scrollY < sections[4].offsetTop) {
        bodyTag.style.backgroundColor = '#57e3f2'
    } else {
        bodyTag.style.backgroundColor = '#57f2b7'
    }
}
