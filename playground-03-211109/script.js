const contentTag = document.querySelector('div.content')
const colors = document.querySelectorAll('div.color')
const text = document.querySelector('div.text')

var userInput = []

colors.forEach(color => {
    color.style.backgroundColor = color.getAttribute('data-color')

    color.addEventListener('click', function() {
        var elementColor = this.getAttribute('data-color')
        contentTag.style.backgroundColor = elementColor
        text.style.color = elementColor
    })
});

window.addEventListener('mousemove', function(event) {
    text.style.transform = `translate(${event.pageX}px, ${event.pageY + 20}px)`
    console.log(event.pageX)
})

document.addEventListener('keypress', function(event) {
    userInput.push(event.key)
    text.innerHTML = userInput.join('')
})
