const articles = document.querySelectorAll('div.article')
const teasers = document.querySelectorAll('div.teaser')

articles.forEach(item => {
    item.addEventListener('mouseenter', function () {
        const num = Array.from(item.parentNode.children).indexOf(item)
        const teaserItems = teasers[num].querySelectorAll('div')
        teaserItems.forEach(item => {
            item.classList.add('open')
        });
    })

    item.addEventListener('mouseleave', function () {
        const num = Array.from(item.parentNode.children).indexOf(item)
        const teaserItems = teasers[num].querySelectorAll('div')
        teaserItems.forEach(item => {
            item.classList.remove('open')
        });
    })
});
