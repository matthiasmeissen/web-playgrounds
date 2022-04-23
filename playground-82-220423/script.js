const contentTag = document.querySelector('div.content')
const carouselItems = document.querySelectorAll('div.carousel-item')
const leftArrow = document.querySelector('svg.left-arrow')
const rightArrow = document.querySelector('svg.right-arrow')

let currentItem = 0

leftArrow.addEventListener('click', function () {
    changeItem(-1)
})

rightArrow.addEventListener('click', function () {
    changeItem(1)
})

const changeItem = function (num) {
    currentItem += num

    if (currentItem >= carouselItems.length) {
        currentItem = 0
    } else if (currentItem < 0) {
        currentItem = carouselItems.length - 1
    }

    carouselItems.forEach(item => {
        item.classList.remove('active')
    });

    carouselItems[currentItem].classList.add('active')
}
