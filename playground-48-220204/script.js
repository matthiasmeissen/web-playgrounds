const targetTag = document.querySelector('div.target')
const formTag = document.querySelector('div.inner')
const submitTag = document.querySelector('div.inner button')

targetTag.addEventListener('click', function () {
    formTag.classList.toggle('open')
})

submitTag.addEventListener('click', function () {
    formTag.classList.toggle('open')
    setLabel(getValues())
})

const getValues = function () {
    const items = formTag.querySelectorAll('input')
    let numChecked = 0

    items.forEach(item => {
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
