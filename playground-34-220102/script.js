const windowTag = document.querySelector('div.window')

let allowDrag = false

let offsetX = 0
let offsetY = 0

windowTag.addEventListener('mousedown', function (event) {
    allowDrag = true

    offsetX = event.offsetX
    offsetY = event.offsetY
})

windowTag.addEventListener('mouseup', function () {
    allowDrag = false
})

window.addEventListener('mousemove', function (event) {
    if (allowDrag) {
        const posX = event.pageX - offsetX
        const posY = event.pageY - offsetY

        windowTag.style.transform = `translate(${posX}px, ${posY}px)`
    }
})
