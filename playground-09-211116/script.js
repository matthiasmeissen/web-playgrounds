const itemTag = document.querySelectorAll('div.item-group')
const headline = document.querySelector('div.content h2')
const navTag = document.querySelectorAll('div.item')

itemTag.forEach(item => {
    item.firstElementChild.addEventListener('click', function () {
        item.classList.toggle('open')
    })
});

navTag.forEach(item => {
    const parent = item.parentNode
    if (item != parent.firstElementChild) {
        item.addEventListener('click', function () {
            headline.innerHTML = this.innerHTML
        })
    }
});
