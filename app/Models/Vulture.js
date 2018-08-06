import Lion from "./Lion.js";
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

import Warthog from "./Warthog.js";
import Xenarthra from "./Xenarthra.js";
import Yak from "./Yak.js";
import Zorilla from "./Zorilla.js";





class Vulture {
    constructor(name = '', sex = '', age = 0, weight, wingSpan) { //default values can be set here
        this.name = name
        this.sex = sex
        this.age = age
        this.weight = weight || 0 //or default values can be set here ( || is the symbol for "or")
        this.wingSpan = wingSpan || 0
        
        }

    

    //methods (actions) go here

}

export default Vulture //command used to "kick-out" this model/class from this file (not the file name, rather the class above.                               //Anything outside the class structure is kept private) OR can be expressed as: export {Warthog} "default"                             //replaces {}