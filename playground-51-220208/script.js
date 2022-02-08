const itemArea = document.querySelector('div.item-area')
const button = document.querySelector('div.side-button')

button.addEventListener('click', function () {
    addItem()
})

const addItem = function () {
    const newItem = createItem('div', 'item', '', itemArea)

    createItem('div', 'item-title', 'Title', newItem)
    createItem('div', 'item-description', 'Some details about that', newItem)
}

const createItem = function (type, itemClass, content, target) {
    const newItem = document.createElement(type)
    newItem.setAttribute('class', itemClass)
    newItem.innerHTML = content
    target.appendChild(newItem)

    return newItem
}
