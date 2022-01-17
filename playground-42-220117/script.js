const contentTag = document.querySelector('div.content')
const buttonTag = document.querySelector('div.add a')
const overlayTag = document.querySelector('div.overlay')
const selectTag = document.querySelector('select')
const inputTag = document.querySelector('div.input')

buttonTag.addEventListener('click', function () {
    overlayTag.classList.toggle('active')
})

selectTag.addEventListener('change', function () {
    console.log(this.selectedIndex)
    buildForm(this.selectedIndex)
})

const buildForm = function (num) {
    inputTag.innerHTML = ''

    if (num == 0) {
        const headlineInput = document.createElement('input')
        inputTag.appendChild(headlineInput)
    } else if (num == 1) {
        const headlineInput = document.createElement('input')
        const textInput = document.createElement('input')
        inputTag.appendChild(headlineInput)
        inputTag.appendChild(textInput)
    } else if (num == 2) {
        const headlineInput = document.createElement('input')
        const textInput = document.createElement('input')
        inputTag.appendChild(headlineInput)
        inputTag.appendChild(textInput)
    }
}
