
"use strict";

class Animal {
	constructor(species) {
		this.species = species;
	}
	eat() {
		console.log("Nom Nom Nom!");
	}
	speak() {
		console.log(this.species + " makes a sound.");
	}
}

class Dog extends Animal {
	constructor(name) {
		super("dog");
		this.name = name;
	}
	speak() {
		console.log(this.name + " says hello!");
	}
}

// add in more dog subclasses - working and companion breeds 
// further subclasses into specific breeds

// for testing
var koala = new Animal("koala");
var barkley = new Dog("barkley");

koala.speak();
koala.eat();
console.log(koala.species);

console.log(barkley.species);
barkley.eat();
barkley.speak();
