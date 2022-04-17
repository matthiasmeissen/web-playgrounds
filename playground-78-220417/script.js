const contentTag = document.querySelector('div.content')
const selectedArea = document.querySelector('div.selectedarea')
const unselectedArea = document.querySelector('div.unselectedarea')
const buttonTag = document.querySelector('div.label')


const words = ['Science', 'Communication', 'Students', 'Courses', 'Public']
let tagsHidden = true

const createTag = function (name) {
    const tag = document.createElement('div')
    tag.classList.add('tag')
    tag.innerHTML = name

    tag.addEventListener('click', function () {
        tag.classList.toggle('active')
        addTags()
    })

    unselectedArea.appendChild(tag)
}

const createTags = function () {
    for (let i = 0; i < 10; i++) {
        const name = words[Math.floor(Math.random() * words.length)]
        createTag(name)
    }
}

const addTags = function () {
    tags = Array.from(document.querySelectorAll('div.tag'))

    tags.sort((a,b) => a.innerHTML.localeCompare(b.innerHTML))

    tags.forEach(tag => {
        if (tag.classList.contains('active')) {
            selectedArea.appendChild(tag)
        } else {
            unselectedArea.appendChild(tag)
        }
    });

    hideTags(4, tagsHidden)
}

buttonTag.addEventListener('click', function () {
    tagsHidden = !tagsHidden

    if (tagsHidden) {
        this.innerHTML = 'Show all'
    } else {
        this.innerHTML = 'Show less'
    }

    addTags()
})

const hideTags = function (amount, active) {
    tags = unselectedArea.querySelectorAll('div.tag')

    if (active) {
        for (let i = amount; i < tags.length; i++) {
            tags[i].classList.add('hidden')
        }
    } else {
        tags.forEach(item => {
            item.classList.remove('hidden')
        });
    }
    
}

createTags()
addTags()
