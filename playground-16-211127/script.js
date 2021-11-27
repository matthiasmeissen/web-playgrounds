const navTag = document.querySelector('nav')

navTag.addEventListener('mouseenter', function () {
    navTag.classList.add('open')
})

navTag.addEventListener('mouseleave', function () {
    navTag.classList.remove('open')
})
