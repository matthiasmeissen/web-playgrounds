const contentTag = document.querySelector('div.content')
const pageTags = document.querySelectorAll('div.page')
const navTags = document.querySelectorAll('nav a')
const navIndicator = document.querySelector('div.indicator')
const transitionTag = document.querySelector('div.transition')

let page = 0

navTags.forEach(item => {
    item.addEventListener('mouseenter', function () {
        const offset = item.offsetLeft - 6
        navIndicator.style.transform = `translateX(${offset}px)`
        transitionTag.classList.add('active')
        transitionTag.innerHTML = item.innerHTML
    })

    item.addEventListener('mouseleave', function () {
        setIndicator(page)
        transitionTag.classList.remove('active')
    })

    item.addEventListener('click', function () {
        page = Array.from(item.parentNode.children).indexOf(item)
        changePage(page)
        transitionTag.classList.remove('active')
    })
});

const changePage = function (num) {
    pageTags.forEach(item => {
        item.classList.remove('active')
    });
    pageTags[num].classList.add('active')
}

const setIndicator = function (num) {
    navIndicator.style.transform = `translateX(${navTags[0].getBoundingClientRect().width * num}px)`
}
