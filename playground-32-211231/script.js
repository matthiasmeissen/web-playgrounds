const navItems = document.querySelectorAll('nav a')
const sections = document.querySelectorAll('div.content section')

navItems.forEach(navItem => {
    navItem.addEventListener('click', function () {
        navItems.forEach(item => {
            item.classList.remove('active')
        });
        navItem.classList.add('active')
    })
});

const setState = function () {
    navItems[0].classList.add('active')

    sections.forEach(section => {
        section.classList.add('hidden')
    });

    sections[0].classList.remove('hidden')
}

setState()
