const navTags = document.querySelectorAll('div.group')
const navitems = document.querySelectorAll('nav a.inner')

navTags.forEach(navTag => {
    navTag.addEventListener('click', function () {
        for (let i = 1; i < this.children.length; i++) {
            this.children[i].classList.toggle('inner')
        }
    })
});
