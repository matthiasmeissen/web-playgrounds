const windowTags = document.querySelectorAll('div.window')
const navItems = document.querySelectorAll('nav a')


const createWindow = function (num) {
    let allowDrag = false
    let offsetX = (num + 1) * 20
    let offsetY = (num + 1) * 20

    windowTags[num].style.transform = `translate(${offsetX}px, ${offsetX}px)`

    windowTags[num].addEventListener('mousedown', function (event) {
        allowDrag = true
        offsetX = event.offsetX
        offsetY = event.offsetY

        makeFirst(num)
    })

    windowTags[num].addEventListener('mouseup', function () {
        allowDrag = false
    })

    windowTags[num].addEventListener('mousemove', function (event) {
        if (allowDrag) {
            const posX = event.pageX - offsetX
            const posY = event.pageY - offsetY

            windowTags[num].style.transform = `translate(${posX}px, ${posY}px)`
        }
    })
}

for (let i = 0; i < windowTags.length; i++) {
    createWindow(i)
}

const makeFirst = function (num) {
    windowTags.forEach(windowTag => {
        windowTag.style.zIndex = 0
    });

    windowTags[num].style.zIndex = 1
}

const toggleItem = function (num) {
    windowTags[num].classList.toggle('active')
    navItems[num].classList.toggle('active')
    makeFirst(num)
}

navItems.forEach(navItem => {
    navItem.addEventListener('click', function (event) {
        for (let i = 0; i < navItems.length; i++) {
            if (event.target == navItems[i]) {
                toggleItem(i)
            }
        }
    })
});

