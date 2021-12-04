const contentTag = document.querySelector('section.content')

const createItem = function (color, number) {
    return `<div class="item" style="background-color: ${color}"><div class="inner"><p>Name ${number}</p><button>Button</button></div></div>`
}

const createItems = function () {
    const items = []

    for (let i = 0; i < 9; i++) {
        const color = (Math.random() * 100) + 140
        items[i] = createItem(`rgb(${color},${color},${color})`,i)
    }

    contentTag.innerHTML = items.join('')
}

createItems()
