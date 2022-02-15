const sliderTag = document.querySelector('div.slider')
const numberTag = document.querySelector('div.numbers')
const numberTags = document.querySelectorAll('div.numbers div')

sliderTag.addEventListener('scroll', function (event) {
    numberTags.forEach(item => {
        checkVisibility(item)
    });
})

const checkVisibility = function (item) {
    const position = item.getBoundingClientRect().y - sliderTag.offsetTop
    if (position == 0) {
        console.log(item.innerHTML)
    }
}
