const contentTag = document.querySelector('div.content')

const createItem = function (location) {
    var item = document.createElement('div')
    item.innerHTML = '<p>This is some item</p>'

    contentTag.insertBefore(createDivider(), location)
    contentTag.insertBefore(item, location)
}

const createDivider = function () {
    var item = document.createElement('div')
    item.classList.add('insert')
    item.innerHTML = '<div></div>'

    item.addEventListener('click', function (event) {
        createItem(event.target)
    })

    return item
}

contentTag.appendChild(createDivider())
