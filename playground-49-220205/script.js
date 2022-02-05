const targetTag = document.querySelector('div.target')
const formTag = document.querySelector('div.inner')
const submitTag = document.querySelector('div.inner button')
const bodyTag = document.querySelector('body')

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

targetTag.addEventListener('click', function () {
    formTag.classList.toggle('open')
})

const getValues = function () {
    const activeItems = formTag.querySelectorAll('input')
    let numChecked = 0

    activeItems.forEach(item => {
        if (item.checked) {
            numChecked += 1
        }
    });

    return(numChecked)
}

const setLabel = function (num) {
    if (num == 0) {
        targetTag.innerHTML = 'Items'
    } else {
        targetTag.innerHTML = `Items (${num})`
    }
}

bodyTag.addEventListener('click', function (event) {
    if (event.target.parentNode == bodyTag) {
        formTag.classList.remove('open')
        setLabel(getValues())
    }
})

const createItems = function () {
    items.forEach(item => {
        const newItem = document.createElement('div')
        const newInput = document.createElement('input')
        const newLabel = document.createElement('label')
        newInput.setAttribute('type', 'checkbox')
        newLabel.innerHTML = item

        newItem.appendChild(newInput)
        newItem.appendChild(newLabel)

        formTag.appendChild(newItem)
    });

    const button = document.createElement('button')
    button.innerHTML = 'Apply Filter'
    formTag.appendChild(button)

    button.addEventListener('click', function () {
        formTag.classList.toggle('open')
        setLabel(getValues())
    })
}

createItems()
