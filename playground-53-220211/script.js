const itemArea = document.querySelector('div.item-area')
const button = document.querySelector('div.side-button')
const areas = document.querySelectorAll('div.area')

let itemCount = 0

button.addEventListener('click', function () {
    addItem()
})

areas.forEach(area => {
    area.addEventListener('drop', function (event) {
        const data = event.dataTransfer.getData('name')
        const item = document.querySelector(`[data_selector='${data}']`)
        this.appendChild(item)

        checkColors(0)
        checkColors(1)
    })
});

const addItem = function () {
    const newItem = createItem('div', 'item', '', itemArea)
    newItem.setAttribute('draggable', 'true')

    itemCount += 1
    newItem.setAttribute('data_selector', `Item ${itemCount}`)

    newItem.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('name', event.target.attributes['data_selector'].value)
    })

    const color = Math.floor((Math.random() * 140) + 120)
    newItem.style.backgroundColor = `hsl(${color}, 100%, 80%)`
    newItem.setAttribute('data_color', color)

    createItem('div', 'item-title', `Item ${itemCount}`, newItem)
    createItem('div', 'item-description', 'Some details about that', newItem)
}

const createItem = function (type, itemClass, content, target) {
    const newItem = document.createElement(type)
    newItem.setAttribute('class', itemClass)
    newItem.innerHTML = content
    target.appendChild(newItem)

    return newItem
}

const checkColors = function (num) {
    const items = areas[num].querySelectorAll('div.item')

    let itemColors = []
    let ordered = false

    for (let i = 0; i < items.length; i++) {
        itemColors[i] = items[i].getAttribute('data_color')
    }

    for (let i = 0; i < itemColors.length - 1; i++) {
        if (!(itemColors[i] < itemColors[i + 1])) {
            ordered = false
        } else {
            ordered = true
        }
    }

    if (ordered) {
        areas[num].classList.add('ordered')
    } else {
        areas[num].classList.remove('ordered')
    }
}
