import Bird from './Bird'
import Counter from './Counter'
export default class Game {

    birds = []

    constructor() {
        this.createBirds()
        this.createCounter()
        this.loop()
    }

    createCounter() {
        this.counter = new Counter()
        this.counter.addPlayerPoints()
        this.counter.addPlayerPoints()
        this.counter.addBirdsPoints()
        this.counter.addBirdsPoints()
        this.counter.addBirdsPoints()
    }



    createBirds() {
        this.addBird()
        this.addBird()
        this.addBird()
        this.addBird()
    }

    addBird() {
        const config = {
            removeBird: this.removeBird,
        }

        this.birds = [...this.birds, new Bird(config)]
    }

    removeBird = bird => {
        const index = this.birds.indexOf(bird)
        this.birds = [
            ...this.birds.slice(0, index),
            ...this.birds.slice(index + 1)
        ]
        console.log(this.birds.length)
    }

    loop() {
        Math.random() < 1 / 60 && this.addBird()
        this.birds.forEach(bird => bird.update())
        requestAnimationFrame(() => this.loop())
    }
}