const contentTag = document.querySelector('div.content')
const sections = document.querySelectorAll('section')
const buttons = document.querySelectorAll('section a')
const sidebar = document.querySelector('div.sidebar')
const navItems = document.querySelectorAll('div.item')

navItems.forEach(item => {
    item.addEventListener('click', function () {
        const num = Array.from(item.parentNode.children).indexOf(item)
        const position = num * window.innerHeight
        contentTag.scrollTo(0, position)
    })
});

contentTag.addEventListener('scroll', function () {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top == 0) {
            const num = Array.from(section.parentNode.children).indexOf(section)

            navItems.forEach(item => {
                item.classList.remove('active')
            });

            navItems[num].classList.add('active')
        }
    });
})

buttons.forEach(item => {
    item.addEventListener('click', function () {
        sidebar.classList.toggle('hidden')
    })
});
