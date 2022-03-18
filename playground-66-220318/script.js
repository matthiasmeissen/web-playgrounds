const headerTag = document.querySelector('div.header')
const cursorTag = document.querySelector('div.cursor')
const tags = document.querySelectorAll('div.pointer')

document.addEventListener('mousemove', function (event) {
    cursorTag.style.transform = `translate(${event.pageX - cursorTag.clientWidth / 2}px, ${event.pageY - cursorTag.clientHeight / 2}px)`
})

tags.forEach(item => {
    item.addEventListener('mouseenter', function () {
        cursorTag.children[0].style.transform = 'scale(0)'
    })

    item.addEventListener('mouseleave', function () {
        cursorTag.children[0].style.transform = 'scale(1)'
    })
});
