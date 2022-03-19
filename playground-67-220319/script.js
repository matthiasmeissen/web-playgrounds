const headerTag = document.querySelector('div.header')
const cursorTag = document.querySelector('div.cursor')
const stories = document.querySelectorAll('div.story')

document.addEventListener('mousemove', function (event) {
    cursorTag.style.transform = `translate(${event.pageX - cursorTag.clientWidth / 2}px, ${event.pageY - cursorTag.clientHeight / 2}px)`
})

const makeElement = function (className, inner, type = 'div') {
    const item = document.createElement(type)
    item.setAttribute('class', className)
    if (inner) {item.innerHTML = inner}

    return item
}

const addElements = function (target, elements) {
    elements.forEach(item => {
        target.appendChild(item)
    });
}

stories.forEach(item => {
    const image = makeElement('image')
    const tags = makeElement('tags')
    const tag1 = makeElement('tag pointer', 'Science')
    const tag2 = makeElement('tag pointer', 'Communication')
    addElements(tags, [tag1, tag2])
    const title = makeElement('title', item.getAttribute('data-name'))
    addElements(item, [image, tags, title])
});

const makeTags = function () {
    const tags = document.querySelectorAll('div.pointer')

    tags.forEach(item => {
        item.addEventListener('mouseenter', function () {
            cursorTag.children[0].style.transform = 'scale(0)'
        })
    
        item.addEventListener('mouseleave', function () {
            cursorTag.children[0].style.transform = 'scale(1)'
        })
    });
}

makeTags()
