const itemArea = document.querySelector('div.item-area')
const button = document.querySelector('div.side-button')
const areaTop = document.querySelector('div.area-01')
const areaBottom = document.querySelector('div.area-02')

button.addEventListener('click', function () {
    addItem()
})

areaTop.addEventListener('drop', function (event) {
    const data = event.dataTransfer.getData('text')
    const item = document.querySelector(`[data_selector='${data}']`)

    this.appendChild(item)
})

areaBottom.addEventListener('drop', function (event) {
    const data = event.dataTransfer.getData('text')
    const item = document.querySelector(`[data_selector='${data}']`)

    this.appendChild(item)
})

const addItem = function () {
    const newItem = createItem('div', 'item', '', itemArea)
    newItem.setAttribute('draggable', 'true')

    newItem.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text', event.target.attributes['data_selector'].value)
    })

    createItem('div', 'item-title', 'Title', newItem)
    createItem('div', 'item-description', 'Some details about that', newItem)
}

const createItem = function (type, itemClass, content, target) {
    const newItem = document.createElement(type)
    newItem.setAttribute('class', itemClass)
    newItem.setAttribute('data_selector', 'Item 1')
    newItem.innerHTML = content
    target.appendChild(newItem)

    return newItem
}
