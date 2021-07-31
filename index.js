// Write your code here
// class Dog {
//     constructor(ame, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
// }

// let bigFluffyDog1 = new Dog("Buzz", "greatPyrennes");
// bigFluffyDog2 = new Dog("Woody", 'labrador');

// console.log(bigFluffyDog1);
// console.log(bigFluffyDog2);

class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink; 
    }
}

class Dinner {
    constructor (salad, soup, entree, _dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = _dessert;
    }
}