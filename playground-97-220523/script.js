const teaserTag = document.querySelector('section div.inner')
const teasers = document.querySelectorAll('section div.teaser')
const indicatorTag = document.querySelector('section div.indicator')

const createIndicators = function () {
    for (let i = 0; i < teasers.length; i++) {
        const item = document.createElement('div')
        indicatorTag.appendChild(item)
    }
}

const setActiveIndicator = function (num) {
    const indicators = indicatorTag.querySelectorAll('div')

    indicators.forEach(item => {
        item.classList.remove('active')
    });

    indicators[num].classList.add('active')
}

teaserTag.addEventListener('scroll', function () {
    const parent = teaserTag.getBoundingClientRect().left
    teasers.forEach((item, num) => {
        const position = item.getBoundingClientRect().left
        if (parent - position == 0) {
            setActiveIndicator(num)
        }
    });
})

createIndicators()
setActiveIndicator(0)
