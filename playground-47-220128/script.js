const buttonTag = document.querySelector('div.toggle')
const navTag = document.querySelector('div.inner')

buttonTag.addEventListener('click', function () {
    navTag.classList.toggle('open')
})
