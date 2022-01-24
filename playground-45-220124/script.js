const contentTag = document.querySelector('div.content')
const buttonTag = document.querySelector('button.large')
const overlayTag = document.querySelector('div.overlay')
const inputTag = document.querySelector('div.input')
const submit = document.querySelector('div.overlay button')

let module = {
    h2: 'Headline',
    p: 'Copy',
}

buttonTag.addEventListener('click', function () {
    overlayTag.classList.toggle('active')
    createInputs()
})

const createInputs = function () {
    inputTag.innerHTML = ''

    for (const key in module) {
        const item = document.createElement('input')

        item.setAttribute('name', module[key])
        item.setAttribute('placeholder', key)

        inputTag.appendChild(item)
    }

    inputTag.firstChild.focus()
}

submit.addEventListener('click', function () {
    createModule()
    overlayTag.classList.toggle('active')
})

const createModule = function () {
    const inputs = inputTag.children

    const item = document.createElement('div')
    item.classList.add('item')

    for (let i = 0; i < inputs.length; i++) {
        addElement(inputs[i].placeholder, inputs[i].value, item)
    }

    contentTag.appendChild(item)
}

const addElement = function (type, content, target) {
    const item = document.createElement(type)
    item.innerHTML = content
    target.appendChild(item)
}
