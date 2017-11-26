    "use strict"

    let display = text => {
        let output = document.createElement("p")
        output.textContent = text
        document.body.appendChild(output)
    }


    class Hero {
        constructor(name, knownAs) {
            this.name = name
            this.knownAs = knownAs || name
        }

        toString() {
            return "I am " + this.name + " also known as " + this.knownAs
        }

        saveWorld() {
            return "Once again " + this.knownAs + " saved the world!"
        }

        kickAss(enemy) {
            return this.knownAs + " just kicked " + enemy.knownAs + "\'s ass"
        }
    }


    class BadGuy {
        constructor(name, knownAs) {
            this.name = name
            this.knownAs = knownAs || name
        }

        toString() {
            return "I am " + this.name + " also known as " + this.knownAs
        }
    }

    const batman = new Hero("Bruce Wayne", "Batman")

    const joker = new BadGuy("Joker")

    display(batman.toString())

    display(batman.saveWorld())

    display(joker.toString())

    display(batman.kickAss(joker))
