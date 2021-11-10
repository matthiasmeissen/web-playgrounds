const gradientTag = document.querySelector('div.gradient')
const cursorTag = document.querySelector('div.cursor')
const circleTag = document.querySelector('div.circle')

window.addEventListener('mousemove', function(event) {
    var angle = (event.pageX / window.innerWidth) * 180
    gradientTag.style.background = `linear-gradient(${angle}deg, #e87d7d, #be89e4)`

    cursorTag.style.transform = `translate(${event.pageX - 10}px, ${event.pageY - 10}px)`
})

gradientTag.addEventListener('mouseenter', function() {
    circleTag.classList.toggle('hover')
})

gradientTag.addEventListener('mouseleave', function() {
    circleTag.classList.toggle('hover')
})
