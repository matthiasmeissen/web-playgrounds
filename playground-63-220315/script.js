const articles = document.querySelectorAll('div.article')
const teasers = document.querySelectorAll('div.teaser')

articles.forEach(item => {
    let stayOpen = false

    item.addEventListener('mouseenter', function () {
        const num = Array.from(item.parentNode.children).indexOf(item)
        teasers[num].classList.add('open')
    })

    item.addEventListener('mouseleave', function () {
        const num = Array.from(item.parentNode.children).indexOf(item)
        if (!stayOpen) {
            teasers[num].classList.remove('open')
        }
    })

    item.addEventListener('click', function () {
        const num = Array.from(item.parentNode.children).indexOf(item)
        teasers[num].classList.add('full')
        stayOpen = true
    })

    teasers.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.remove('open')
            item.classList.remove('full')
            stayOpen = false
        })
    });
});
