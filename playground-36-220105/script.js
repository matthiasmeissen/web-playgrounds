const navTag = document.querySelector('nav')
const navItems = document.querySelectorAll('nav > div')
const navInner = document.querySelectorAll('nav div a')

navTag.addEventListener('mouseenter', function () {
    navInner.forEach(item => {
        item.classList.add('open')
    });
})

navTag.addEventListener('mouseleave', function () {
    navInner.forEach(item => {
        item.classList.remove('open')
    });
})

navItems.forEach(navItem => {
    navItem.addEventListener('click', function (event) {
        navItems.forEach(navItem => {
            navItem.classList.remove('active')
        });
        navItem.classList.add('active')
    })
});
