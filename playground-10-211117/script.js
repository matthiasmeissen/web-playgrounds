const contentTag = document.querySelector('div.content')
const stickerTag = document.querySelector('div.stickers')

let stickers = []

window.addEventListener('click', function (event) {
    const x = event.pageX
    const y = event.pageY

    const sticker = `<div class='sticker' style='transform: translate(${x - 40}px, ${y - 40}px)'></div>`

    stickers.push(sticker)

    stickerTag.innerHTML = stickers.join('')
})
