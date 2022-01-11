const contentTag = document.querySelector('div.content')
const editTag = document.querySelector('div.top a')

editTag.addEventListener('click', function () {
    removeDivider()
})

const createItem = function (location, text) {
    var item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = `<p>${text}</p>`

    contentTag.insertBefore(createDivider(), location)
    contentTag.insertBefore(item, location)
}

const createDivider = function () {
    var item = document.createElement('div')
    item.classList.add('insert')
    item.innerHTML = '<div><span class="tooltip"><input></input></span></div>'

    item.querySelector('input').addEventListener('change', function (event) {
        createItem(this.parentElement.parentElement.parentElement, event.target.value)
        event.target.value = ''
    })

    return item
}

const removeDivider = function () {
    const dividers = document.querySelectorAll('div.insert')

    dividers.forEach(divider => {
        divider.remove()
    });
}

contentTag.appendChild(createDivider())
