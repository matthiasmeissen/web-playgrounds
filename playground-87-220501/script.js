const contentTag = document.querySelector('div.content')
const headerTag = document.querySelector('div.header')

window.addEventListener('scroll', function () {
    const position = contentTag.getBoundingClientRect().top

    if (position < window.innerHeight / -2) {
        headerTag.classList.add('hidden')
    } else {
        headerTag.classList.remove('hidden')
    }
})
