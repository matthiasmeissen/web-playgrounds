const itemTag = document.querySelector('div.item')
const resizeTag = document.querySelector('div.resize')

let canMove = false
let canResize = false
let offsetX = 0
let offsetY = 0

itemTag.style.transform = 'translate(200px, 200px)'

itemTag.addEventListener('mousedown', function (event) {
    canMove = true
    offsetX = event.offsetX
    offsetY = event.offsetY
    this.classList.add('grab')
})

itemTag.addEventListener('mouseup', function () {
    canMove = false
    this.classList.remove('grab')
})

resizeTag.addEventListener('mousedown', function () {
    canResize = true
})

window.addEventListener('mouseup', function () {
    canResize = false
})

window.addEventListener('mousemove', function (event) {
    if (canResize) {
        itemTag.style.width = `${event.clientX + offsetX}px`
        itemTag.style.height = `${event.clientY + offsetY}px`

        canMove = false
    } else if (canMove) {
        itemTag.style.transform = `translate(${event.pageX - offsetX}px, ${event.pageY - offsetY}px)`
    }
})
