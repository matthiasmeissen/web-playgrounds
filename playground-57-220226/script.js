const slidersTag = document.querySelector('div.sliders')
const number = document.querySelector('div.number')

let num1 = 0
let num2 = 0
let num3 = 0

let finalNumber = 0

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
                if (position < 10) {
                    const currentNumber = parseInt(item.innerHTML)
                    createNumber(num, currentNumber)
                }
            });
        })
    }
}

const createNumber = function (position, currentNumber) {
    finalNumber = (currentNumber * 100)

    if (position == 1) {
        num1 = currentNumber
    } else if (position == 2) {
        num2 = currentNumber
    } else if (position == 3) {
        num3 = currentNumber   
    }

    finalNumber = (num1 * 100) + (num2 * 10) + num3

    number.innerHTML = finalNumber
}

let count1 = new Counter()
count1.create()
count1.getNumbers(count1.numbers, count1.sliderTag, 1)

let count2 = new Counter()
count2.create()
count2.getNumbers(count2.numbers, count2.sliderTag, 2)

let count3 = new Counter()
count3.create()
count3.getNumbers(count3.numbers, count3.sliderTag, 3)
