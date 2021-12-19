const logoTag = document.querySelector('.logo')

const logoHeight = logoTag.clientHeight

window.addEventListener('scroll', function () {
    const logoSize = 1 - (window.scrollY / logoHeight)
    logoTag.style.fontSize = Math.max(4, (logoSize * 14)) + 'vw'
})
