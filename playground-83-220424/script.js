const bodyTag = document.querySelector('body')
const noteTag = document.querySelector('div.note')
const notes = document.querySelector('div.notes')

window.addEventListener('mousemove', function (event) {
    noteTag.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`
})

window.addEventListener('click', function () {
    const note = noteTag.cloneNode(true)
    notes.appendChild(note)
})
