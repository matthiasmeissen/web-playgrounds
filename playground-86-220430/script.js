const contentTag = document.querySelector('div.content')
const sections = document.querySelectorAll('section')

const section1 = [
    'Wir sind Project Sci.com',
    'Unser Ziel ist es Studierende, Forschung und Öffentlichkeit zusammen zu bringen.',
    'Wir sind ein von der Berlin University Alliance gefördertes Lehrprojekt.',
    'Gemeinsam mit Studierenden entwicklen wir neue Formate zur Vermittlung von Wissen.'
]

const section2 = [
    'Wir machen das Projektlabor Wissenschaftskommunikation.',
    'Hier realisieren Studierende Projekte, in denen sie Forschungsinhalte zielgruppengerecht vermitteln',
    'Dabei organisieren sie sich in interdisziplinären Teams.',
    'Und erlernen verschiedene Tools, wie z.B. digitale Fertigungstechniken.',
    'Die Projekte zeigen wir an verschiedenen öffentlichen Orten wie z.B. Schulen, Museen und Festivals',
    'Das Format können Anschauungsexperimente, interaktive Simulationen, Performances oder ähnliches sein.',
]

const section3 = [
    'Das Projekt',
    'Part 2',
    'Part 3',
    'Part 4',
    'Part 5',
    'Part 6',
    'Part 7',
    'Part 8',
    'Part 9'
]

const createArea = function (sectionText, target, hue) {
    for (let i = 0; i < sectionText.length; i++) {
        const area = document.createElement('div')
        area.classList.add('area')
        area.style.backgroundColor = `hsl(${hue}deg, 100%, ${(120 / sectionText.length) * i}%)`

        const text = document.createElement('div')
        text.innerHTML = sectionText[i]

        area.appendChild(text)
        target.appendChild(area)
    }
}

createArea(section1, sections[0], 140)
createArea(section2, sections[1], 160)
createArea(section3, sections[2], 180)
