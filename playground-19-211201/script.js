const cursorPosition = document.querySelector('div.cursor')
const cursorIcon = document.querySelector('div.cursor div')
const images = document.querySelectorAll('div.image')

window.addEventListener('mousemove', function (event) {
    cursorPosition.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`
})

images.forEach(image => {
    image.addEventListener('mouseenter', function () {
        cursorIcon.classList.add('hover')
    })

    image.addEventListener('mouseleave', function () {
        cursorIcon.classList.remove('hover')
    })
});