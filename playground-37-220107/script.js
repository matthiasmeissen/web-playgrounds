const navTag = document.querySelector('nav')
const navItems = document.querySelectorAll('nav > div')
const navInner = document.querySelectorAll('nav div a')
const layerTag = document.querySelector('div.layer')
const sections = document.querySelectorAll('section')

navTag.addEventListener('mouseenter', function () {
    navInner.forEach(item => {
        item.classList.add('open')
    });
})

navTag.addEventListener('mouseleave', function () {
    navInner.forEach(item => {
        item.classList.remove('open')
    });
})

navItems.forEach(navItem => {
    navItem.addEventListener('click', function (event) {
        navItems.forEach(navItem => {
            navItem.classList.remove('active')
        });
        navItem.classList.add('active')

        for (let i = 0; i < navItems.length; i++) {
            if (event.target == navItems[i] || event.target == navInner[i]) {
                layerTag.classList.add('open')
                setTimeout(() => {
                    show_section(i)
                    layerTag.classList.remove('open')
                    navInner.forEach(item => {
                        item.classList.remove('open')
                    });
                }, 600);
            }
        }
    })
});

const show_section = function (num) {
    sections.forEach(section => {
        section.classList.remove('active')
    });
    sections[num].classList.add('active')
}
