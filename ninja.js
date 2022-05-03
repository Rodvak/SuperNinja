// Ninja class
class Ninja {
    constructor (name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats(){
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;

    }
    
    drinkSake(){
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().showStats().drinkSake().showStats();



// Sensei class extends from Ninja.
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
    }
}

const superSensei = new Sensei("BanDam");
console.log( "Sensei's name: " + superSensei.name , "\n", "Strength: " + superSensei.strength, "\n", "Speed: " + superSensei.speed, "\n", "Health: " + superSensei.health, "\n", "Winsdom: " + superSensei.wisdom);
superSensei.speakWisdom();
console.log("Sensei's health after Sake: " + superSensei.health);

