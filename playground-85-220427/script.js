const contentTag = document.querySelector('div.content')
const pageIndicator = document.querySelector('div.header div.page')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    sections.forEach(item => {
        const position = item.getBoundingClientRect().top + 100

        if (position >= 0 && position < 200) {
            pageIndicator.innerHTML = item.getAttribute('data-name')
        }
    });
})
