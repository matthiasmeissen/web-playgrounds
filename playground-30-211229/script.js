const bodyTag = document.querySelector('body')

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY / window.innerHeight
    bodyTag.style.background = `linear-gradient(45deg, hsl(${scrollPosition * 80 + 200}deg 60% 80%), hsl(${scrollPosition * 80 + 240}deg 60% 80%))`
})
