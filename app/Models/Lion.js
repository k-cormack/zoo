
import Alligator from "./Alligator.js";
import Bear from "./Bear.js";
import Crocodile from "./Crocodile.js";
import Dragon from "./Dragon.js";
import Eagle from "./Eagle.js";
import Fox from "./Fox.js";
import Giraffe from "./Giraffe.js";
import Hyena from "./Hyena.js";
import Iguana from "./Iguana.js";
import Jaguar from "./Jaguar.js";
import Koala from "./Koala.js";
import Mink from "./Mink.js";
import Newt from "./Newt.js";
import Orangutan from "./Orangutan.js";
import Peacock from "./Peacock.js";
import Quail from "./Quail.js";
import Roadrunner from "./Roadrunner.js";
import Shark from "./Shark.js";
import Tiger from "./Tiger.js";
import Unicorn from "./Unicorn.js";
import Vulture from "./Vulture.js";
import Warthog from "./Warthog.js";
import Xenarthra from "./Xenarthra.js";
import Yak from "./Yak.js";
import Zorilla from "./Zorilla.js";


// import Warthog from './Warthog.js'


class Lion {

    constructor(name, hairColor, sex, maneColor, weight, ) { //What are the fields of the form?
        //this.id = a unique id automatically created by another function
        this.name = name
        this.hairColor = hairColor
        this.sex = sex
        this.manColor = maneColor
        this.weight = weight
    }

    eat(food) { //example referencing the Warthog model/class - Warthog class needs to be imported - see top of page
        if (food instanceof Warthog) {  //hold 'crrl' key and hover over Warthog, or hold 'ctrl' and click Warthog
        console.log("Yummy Pork!!")

        food.alive = "dead" //"alive" does not exist on Warthog, but you can modify the Warthog class from here - see lightbulb/red squiggly
                            //this.alive will NOT be required to create and instance of the class (an actual warthog)
    }
    }

    roar() {
        console.log(this.name + ' says \"RRRRROOOOAAARRR!\"')
    }

}

export default Lion

//the below examples will NOT be in THIS file:

// let simba = new Lion("Simba", "Brown", "Male", "Yellow", 200)
// let scar = new Lion("Scar", "Red", "Male", "Black", 250)

// let lions = [simba, scar]


// simba.roar() //simba is the name/actual lion that is being called, then roar is invoked
