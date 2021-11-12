const contentTag = document.querySelector('div.content')
const tags = document.querySelectorAll('div.tag')
const initialItems = []
const colors = ['color1', 'color2', 'color3']

for (let i = 0; i < 10; i++) {
    const number = Math.floor(Math.random() * 3)
    initialItems.push(`<div class='item ${colors[number]}'></div>`)
}

contentTag.innerHTML = initialItems.join('')


tags.forEach(tag => {
    tag.addEventListener('click', function () {
        removeTags()
        tag.classList.add('tagSelected')
        applyTag(tag.innerHTML)
    })
});

const removeTags = function () {
    tags.forEach(tag => {
        tag.classList.remove('tagSelected')
    });
}

const showItem = function (name1, name2) {
    const items = document.querySelectorAll('div.item')

    items.forEach(item => {
        item.classList.remove('hidden')
        if (item.classList.contains(name1)) {
            item.classList.add('hidden')
        } else if (item.classList.contains(name2)) {
            item.classList.add('hidden')
        }
    });
}

const applyTag = function (name) {
    if (name == 'All') {
        showItem()
    } else if (name == 'Color 1') {
        showItem('color2', 'color3')
    } else if (name == 'Color 2') {
        showItem('color1', 'color3')
    } else if (name == 'Color 3') {
        showItem('color1', 'color2')
    }
}
