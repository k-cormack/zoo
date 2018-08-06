class Lion{

    constructor(name, hairColor, sex, maneColor, weight, ) { //What are the fields of the form?
        //this.id = a unique id automatically created by another function
        this.name  = name
        this.hairColor = hairColor
        this.sex = sex
        this.manColor = maneColor
        this.weight = weight
    }

    roar() {
        console.log(this.name + ' says \"RRRRROOOOAAARRR!\"')
    }

}



//the below examples will NOT be in THIS file:

let simba = new Lion("Simba", "Brown", "Male", "Yellow", 200)
// let scar = new Lion("Scar", "Red", "Male", "Black", 250)

// let lions = [simba, scar]


simba.roar() //simba is the name/actual lion that is being called, then roar is invoked
