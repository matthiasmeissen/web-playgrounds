const navTags = document.querySelectorAll('nav a')
const navIndicator = document.querySelector('div.indicator')

navTags.forEach(item => {
    item.addEventListener('mouseenter', function () {
        const offset = item.getBoundingClientRect().x
        navIndicator.style.transform = `translateX(${offset}px)`
    })
});
