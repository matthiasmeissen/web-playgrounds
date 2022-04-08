const contentTag = document.querySelector('div.content')
const navTags = document.querySelectorAll('nav a')
const navIndicator = document.querySelector('div.indicator')

let page = 0

navTags.forEach(item => {
    item.addEventListener('mouseenter', function () {
        const offset = item.getBoundingClientRect().x
        navIndicator.style.transform = `translateX(${offset}px)`
    })

    item.addEventListener('mouseleave', function () {
        setIndicator(page)
    })

    item.addEventListener('click', function () {
        page = Array.from(item.parentNode.children).indexOf(item)
        changePage(page)
    })
});

const changePage = function (num) {
    contentTag.style.transform = `translateX(${- window.innerWidth * num}px)`
}

const setIndicator = function (num) {
    navIndicator.style.transform = `translateX(${navIndicator.getBoundingClientRect().width * num}px)`
}
