const contentTag = document.querySelector('div.content')
const articles = document.querySelector('div.articles')
const teasers = document.querySelectorAll('div.teasers div')

teasers.forEach(item => {
    const article = document.createElement('a')
    article.innerHTML = item.innerHTML
    articles.appendChild(article)

    article.addEventListener('mouseenter', function () {
        const num = Array.from(this.parentNode.children).indexOf(this)
        teasers[num].classList.add('active')
    })

    article.addEventListener('mouseleave', function () {
        const num = Array.from(this.parentNode.children).indexOf(this)
        teasers[num].classList.remove('active')
    })

    article.addEventListener('click', function () {
        const num = Array.from(this.parentNode.children).indexOf(this)
        teasers[num].classList.add('open')
    })

    item.addEventListener('click', function () {
        this.classList.toggle('open')
    })
});
