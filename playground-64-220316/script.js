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

window.addEventListener('scroll', function () {
    if (window.innerWidth < 1200) {
        teasers.forEach(item => {
            const center = this.window.innerHeight / 2
            const top = item.getBoundingClientRect().top
            const height = item.getBoundingClientRect().height / 2
            const amount = (top + height) - center

            item.children[1].style.transform = `translate(0, ${amount * 0.2}px)`
            item.children[2].style.transform = `translate(0, ${amount * 0.4}px)`
        });
    }
})
