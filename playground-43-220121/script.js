const contentTag = document.querySelector('div.content')
const buttonTag = document.querySelector('button.large')
const overlayTag = document.querySelector('div.overlay')
const submit = document.querySelector('div.overlay button')

let module = {
    headline: 'Headline',
    copy: 'Copy',
    image: true
}

buttonTag.addEventListener('click', function () {
    overlayTag.classList.toggle('active')
})

const getValues = function () {
    module.headline = overlayTag.children.headline.value
    module.copy = overlayTag.children.copy.value
}

submit.addEventListener('click', function () {
    getValues()
    createModule()
    overlayTag.classList.toggle('active')
})

const createModule = function () {
    const item = document.createElement('div')
    item.classList.add('item')

    addElement('h2', module.headline, item)
    addElement('p', module.copy, item)

    contentTag.appendChild(item)
}

const addElement = function (type, content, target) {
    const item = document.createElement(type)
    item.innerHTML = content
    target.appendChild(item)
}
