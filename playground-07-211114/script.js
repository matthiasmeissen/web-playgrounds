const navIndicator = document.querySelector('div.active')
const navItems = document.querySelectorAll('div.item')
const contentTag = document.querySelector('div.content')
const headline = document.querySelector('div.content h2')

const setActive = function () {
    navItems.forEach(navItem => {
        navItem.classList.remove('selected')
    });
}

const setContent = function (num) {
    if (num == 0) {
        contentTag.style.backgroundColor = '#e837a1'
        headline.innerHTML = 'Item 1'
    } else if (num == 1) {
        contentTag.style.backgroundColor = '#4637e8'
        headline.innerHTML = 'Item 2'
    } else if (num == 2) {
        contentTag.style.backgroundColor = '#37e89b'
        headline.innerHTML = 'Item 3'
    }
}

navItems.forEach(navItem => {
    navItem.addEventListener('click', function () {
        const num = this.getAttribute('data-num')
        navIndicator.style.transform = `translateX(${num * 100}px)`
        setActive()
        this.classList.add('selected')
        setContent(num)
    })
});
