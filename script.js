const but = document.querySelector('.but'),
    button6 = document.querySelector('.button6')
const random = (min, max) => {
    const rich = Math.floor(Math.random() * (max - min + 1) + min)
    return rich

}

but.addEventListener('mouseenter', () => {
    but.style.top = `${random(0, 90)}%`  
    but.style.left = `${random(0, 90)}%`
    but.style.margin = 0            
})

button6.addEventListener('click', () => {
    alert('Xa albatta')

})




























// class Hover extends ElementQuery {
//     constructor(data) {
//         super(data)
//         this.el.onmouseover = () => this.move()
//     }

//     random(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min)
//     }
//     move() {
//         this.el.style.marginLeft = this.random(0, innerWidth - this.el.clientWidth) + 'px'
//         this.el.style.marginTop = this.random(0, innerHeight - this.el.clientHeight) + 'px'
//         this.el.style.color = `rgb(${this.random(0, 255)},${this.random(0, 255)},${this.random(0, 255)})`
//         this.el.style.background = `rgb(${this.random(0, 255)},${this.random(0, 255)},${this.random(0, 255)})`
//         this.el.style.transition = '90ms'
//     }
// }

// const hover = new Hover({
//     el: '.header__content'
// })

// class My {
//     static random = (min, max) => Math.floor(Math.random() * (max + 1 - min) +min)
// }


