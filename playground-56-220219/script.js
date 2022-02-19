const slidersTag = document.querySelector('div.sliders')
const number = document.querySelector('div.number')

let finalNumber = 1

const Number = {
    position: 1,
    sliderTag: '',
    numbersTag: '',
    numbers: [],

    create: function () {
        this.sliderTag = document.createElement('div')
        this.sliderTag.setAttribute('class', 'slider')

        this.numbersTag = document.createElement('div')
        this.numbersTag.setAttribute('class', 'numbers')

        for (let i = 0; i < 10; i++) {
            const item = document.createElement('div')
            item.innerHTML = i
            this.numbersTag.appendChild(item)

            this.numbers.push(item)
        }

        this.sliderTag.appendChild(this.numbersTag)

        slidersTag.appendChild(this.sliderTag)

        return this.numbers
    },

    checkPosition: function (items) {
        items.addEventListener('scroll', function () {
            items.forEach(item => {
                this.getNumber(item)
            });
        })
    },

    getNumber: function (item, parent) {
        const position = item.getBoundingClientRect().y - parent.offsetTop
        if (position == 0) {
            console.log(item.innerHTML)
            return item.innerHTML
        }
    }
}

class Counter {
    constructor() {
        this.number = 1
        this.sliderTag = ''
        this.numbersTag = ''
        this.numbers = []
    }

    create() {
        this.sliderTag = document.createElement('div')
        this.sliderTag.setAttribute('class', 'slider')

        this.numbersTag = document.createElement('div')
        this.numbersTag.setAttribute('class', 'numbers')

        for (let i = 0; i < 10; i++) {
            const item = document.createElement('div')
            item.innerHTML = i
            this.numbersTag.appendChild(item)

            this.numbers.push(item)
        }

        this.sliderTag.appendChild(this.numbersTag)

        slidersTag.appendChild(this.sliderTag)
    }

    getNumbers(items, parent, num) {
        this.sliderTag.addEventListener('scroll', function () {
            items.forEach(item => {
                const position = item.getBoundingClientRect().y - parent.offsetTop
                if (position == 0) {
                    const currentNumber = parseInt(item.innerHTML) * num
                    number.innerHTML = currentNumber
                }
            });
        })
    }
}

let count1 = new Counter()
count1.create()
count1.getNumbers(count1.numbers, count1.sliderTag, 1)

let count2 = new Counter()
count2.create()
count2.getNumbers(count2.numbers, count2.sliderTag, 1)
