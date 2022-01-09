const items = document.querySelectorAll('div.inner')

items.forEach(item => {
    item.addEventListener('click', function () {
        if (item.classList.contains('open')) {
            item.classList.remove('open')
        } else {
            items.forEach(item => {
                item.classList.remove('open')
            });
            item.classList.add('open')
        }
    })
});
