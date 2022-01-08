const navItems = document.querySelectorAll('nav a')
const navIndicator = document.querySelector('div.indicator')

const setIndicator = function (item) {
    navIndicator.style.width = item.clientWidth + 'px'
    navIndicator.style.transform = `translateX(${item.offsetLeft - 12}px)`
}

navItems.forEach(navItem => {
    navItem.addEventListener('mouseover', function (event) {
        setIndicator(event.target)
    })

    navItem.addEventListener('click', function () {
        navItems.forEach(navItem => {
            navItem.classList.remove('active')
        });
        navItem.classList.add('active')
    })

    navItem.parentElement.addEventListener('mouseleave', function () {
        for (let i = 0; i < navItems.length; i++) {
            if (navItems[i].classList.contains('active')) {
                setIndicator(navItems[i])
            }
        }
    })
});

setIndicator(navItems[0])
