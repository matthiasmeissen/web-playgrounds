const navTag = document.querySelector('nav .open')
const iconTag = document.querySelector('nav .icon')

iconTag.addEventListener('click', function () {
    navTag.classList.toggle('active')
})
