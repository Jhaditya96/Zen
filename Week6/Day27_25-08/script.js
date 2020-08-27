"use strict";
class pet {
    constructor(parameter) {
        this.name = parameter.name;
        this.type = parameter.type;
        this.color = parameter.color;
        this.age = parameter.age;
        this.breed = parameter.breed;
        this.history = parameter.history;
        this.Location = parameter.Location;
        this.status = parameter.status;
    }
}
class request {
    constructor() {
        this.query = [];
        this.pets = [];
    }

    storeEnquiry(enquiry) {
        this.query.push(enquiry);
    }

    
}
class available extends request {
    constructor() {
        super();
        this.pets = [];
    }
    insert(newPet) {
        console.log(`${newPet.name} => ${newPet.status}`)
        this.pets.push(newPet);
    }
    count() {
        let pets = this.pets.reduce((acc, element) => {
            acc[element.type] ? acc[element.type]++ : acc[element.type] = 1;
            return acc;
        }, {});
        return pets;
    }
}
let petShop = new available();
let pet1 = new pet({
    name: 'Claire',
    type: 'Cat',
    color: 'Black',
    age: 15,
    breed: 'Ragdoll',
    history: 'American',
    Location: "Mumbai",
    status:'Available',
});
petShop.insert(pet1);
let pet2 = new pet({
    name: 'Tommy',
    type: 'Dog',
    color: 'Brown',
    age: 18,
    breed: 'Bulldog',
    history: 'Newly Born',
    Location: 'Pune',
    status:'NotAvailable',
});
petShop.insert(pet2);
let pet3 = new pet({
    name: 'Roger',
    type: 'Dog',
    color: 'Black',
    age: 12,
    breed: 'Labro',
    history: 'Retired From Police',
    Location: 'Nashik',
    status:"Available",
});
petShop.insert(pet3);
let pet4 = new pet({
    name: 'Rahul',
    type: 'Cat',
    color: 'Brown',
    age: 2,
    breed: 'Bengal Cat',
    history: 'Stayed with 2 owners',
    Location: 'Delhi',
    status:"Not Available",
});
petShop.insert(pet4);
let pet5 = new pet({
    name: 'Palak',
    type: 'Fish',
    color: 'Orange',
    age: 5,
    breed: 'ClownFish',
    history: 'New Born',
    Location: 'Vardha',
    status:"Available",
});
petShop.insert(pet5);

petShop.storeEnquiry([{ color: 'white', type: 'dog' }]);
console.log('Count Of Pets type-wise: ' ,petShop.count());