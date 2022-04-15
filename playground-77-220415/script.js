const contentTag = document.querySelector('div.content')
const selectedArea = document.querySelector('div.selectedarea')
const unselectedArea = document.querySelector('div.unselectedarea')

let tags = []
const words = ['Science', 'Communication', 'Students', 'Courses', 'Public']

const createTag = function (name, state) {
    const tag = {item:'', name: name, state:''}

    tag.item = document.createElement('div')
    tag.item.classList.add('tag')
    tag.item.innerHTML = name

    tag.item.addEventListener('click', function () {
        tag.item.classList.toggle('active')
        addTags()
    })

    tag.state = state

    tags.push(tag)
}

const createTags = function () {
    for (let i = 0; i < 10; i++) {
        const name = words[Math.floor(Math.random() * words.length)]
        createTag(name, false)
    }
}

const addTags = function () {
    tags.forEach(tag => {
        if (tag.item.classList.contains('active')) {
            selectedArea.appendChild(tag.item)
            tag.state = true
        } else {
            unselectedArea.appendChild(tag.item)
            tag.state = false
        }
    });
}

createTags()
addTags()
