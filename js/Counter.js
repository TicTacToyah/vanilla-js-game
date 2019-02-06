export default class Counter {
    playerPoints = 0
    birdPoints = 0

    constructor() {
        this.el = this.render()
        this.update()
    }

    addPlayerPoints() {
        this.playerPoints++
        this.update()
    }

    addBirdsPoints() {
        this.birdPoints++
        this.update()
    }

    update() {
        this.el.innerHTML = this.playerPoints + ':' + this.birdPoints
    }

    render() {
        const el = document.createElement('div')
        el.className = 'counter'
        document.body.insertAdjacentElement('beforeend', el)
        return el
    }

}