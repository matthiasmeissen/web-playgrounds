const teaserTag = document.querySelector('section.teaser')
const teaserContent = document.querySelector('section.teaser div')

window.addEventListener('scroll', function () {
    const scrollAmount = Math.min(window.scrollY / teaserTag.offsetTop, 1)
    positionItems(scrollAmount * 60, scrollAmount * 40 + 20)
})

const positionItems = function (s, w) {
    teaserContent.style.transform = `translateY(${s}vh)`
    teaserContent.style.width = w + 'vw'
}
