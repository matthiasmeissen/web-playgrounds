const itemTags = document.querySelectorAll('div.inner a')
const subTag = document.querySelector('div.sub')

itemTags.forEach(item => {
    item.addEventListener('click', function () {
        subTag.classList.toggle('open')
    })
});
