const slidersTag = document.querySelector('div.sliders')

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
    },

    check: function () {
        this.sliderTag.addEventListener('scroll', function (event) {
            this.numbers.forEach(item => {
                const position = item.getBoundingClientRect().y - this.sliderTag.offsetTop
                if (position == 0) {
                    this.numbersTag.innerHTML = item.innerHTML
                }
            });
        })
    }
}

const slider1 = Number.create()
