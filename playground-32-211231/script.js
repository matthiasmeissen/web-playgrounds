const navItems = document.querySelectorAll('nav a')
const sections = document.querySelectorAll('div.content section')

let currentItem = 0

navItems[0].classList.add('active')
sections[0].classList.add('active')

navItems.forEach(navItem => {
    navItem.addEventListener('click', function (event) {

        currentItem = parseInt(event.target.attributes[1].value)

        removeActive()
        setActive(currentItem)
    })
});

window.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowDown') {
        if (currentItem >= navItems.length - 1) {
            currentItem = 0
        } else {
            currentItem += 1
        }
        removeActive()
        setActive(currentItem)
    } else if (event.key == 'ArrowUp') {
        if (currentItem <= 0) {
            currentItem = 4
        } else {
            currentItem -= 1
        }
        removeActive()
        setActive(currentItem)
    }
})

const removeActive = function () {
    navItems.forEach(navItem => {
        navItem.classList.remove('active')
    });

    sections.forEach(section => {
        section.classList.remove('active')
    });
}

const setActive = function (number) {
    navItems[number].classList.add('active')
    sections[number].classList.add('active')
}
