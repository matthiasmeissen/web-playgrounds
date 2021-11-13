const contentTag = document.querySelector('div.content')
const paginationTag = document.querySelector('div.pagination')
const button = document.querySelector('button')
const sections = []
const pagination = []
let currentSection = 0

const sectionContent = [
    {headline: 'Section 1', copy: 'This is some text in the section'},
    {headline: 'Section 2', copy: 'This is some text in the section'},
    {headline: 'Section 3', copy: 'This is some text in the section'}
]

const createSection = function (headline, copy) {
    const section = `<section><div class='image'></div><div class='text'><h2>${headline}</h2><p>${copy}</p></div></section>`
    return section
}

const createPagination = function () {
    const item = '<div></div>'
    return item
}

sectionContent.forEach(section => {
    sections.push(createSection(section.headline, section.copy))
    pagination.push(createPagination())
});

contentTag.innerHTML = sections.join('')
contentTag.style.width = (sections.length * 100) + 'vw'

paginationTag.innerHTML = pagination.join('')

const paginationItems = document.querySelectorAll('div.pagination div')
paginationItems[0].classList.add('active')

button.addEventListener('click', function () {
    if (currentSection < sections.length - 1) {
        currentSection += 1
    } else {
        currentSection = 0
    }

    paginationItems.forEach(item => {
        item.classList.remove('active')
    });

    paginationItems[currentSection].classList.add('active')

    contentTag.style.transform = `translateX(${-currentSection * 100}vw)`
})
