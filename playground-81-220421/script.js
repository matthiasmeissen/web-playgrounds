const contentTag = document.querySelector('div.content')
const carousel = document.querySelector('div.carousel div.inner')
const carouselItems = document.querySelector('div.carousel div.items')
const paginationItems = document.querySelectorAll('div.pagination div')

let carouselItem = 0

carousel.addEventListener('click', function () {
    setItemNumber(3)
    moveItem(carouselItems)
    setPagination(carouselItem)
})

const setItemNumber = function (length) {
    if (carouselItem < length - 1) {
        carouselItem += 1
    } else {
        carouselItem = 0
    }
}

const moveItem = function (item) {
    item.style.transform = `translateX(${carouselItem * -carousel.getBoundingClientRect().width}px)`
}

const setPagination = function (num) {
    paginationItems.forEach(item => {
        item.classList.remove('active')
    });
    paginationItems[num].classList.add('active')
}
