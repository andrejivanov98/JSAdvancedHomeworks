class Animal{
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eat(someInput){    
        if(someInput.isAnimal = true && this.type === "herbivore"){
            console.log(`The animal ${this.name} is a herbivore and does not eat other animals.`)
        }
        else if(someInput.isAnimal = true && this.type !== "herbivore" && this.size > someInput.size){
            someInput.isEaten = true;
            console.log(`The animal ${this.name} ate the animal ${someInput.name}.`)
        }
        else if(someInput.isAnimal = true && someInput.size > this.size){
            console.log(`The animal ${this.name} tried to eat the animal ${someInput.name}, but it was too large.`)
        }
        else if(someInput.isAnimal = false){
            console.log(`${this.name} is eating ${someInput.type}.`)
        }
       
    };
    
}

class Bird extends Animal{
    constructor(name, type, age, size, isAnimal){
        super(name, type, age, size)
        this.isAnimal = isAnimal;
    }
}

let dog = new Animal("Hansi", "omnivore", 3, 5);
let chicken = new Bird("Coco", "brojler", 1, 2, true);

dog.eat(chicken);