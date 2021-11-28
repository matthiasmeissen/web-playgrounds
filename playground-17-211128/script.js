const contentTag = document.querySelector('div.content')
const sections = document.querySelectorAll('section')

const firstSection = sections[0].cloneNode(true)
contentTag.appendChild(firstSection)

document.addEventListener('scroll', function () {
    if (window.scrollY == contentTag.clientHeight - sections[0].clientHeight) {
        document.documentElement.scrollTop = 0
    }
})
