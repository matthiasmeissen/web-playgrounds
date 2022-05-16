const navTag = document.querySelector('nav div.inner')
const iconOpen = document.querySelector('nav div.icon.open')
const iconClose = document.querySelector('nav div.icon.close')

iconOpen.addEventListener('click', function () {
    navTag.classList.add('open')
})

iconClose.addEventListener('click', function () {
    navTag.classList.remove('open')
})
