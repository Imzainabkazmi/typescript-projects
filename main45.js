"use strict";
function car(manufacturer, model, colour, features) {
    const car = {
        manufacturer: manufacturer,
        model: model,
        colour: colour,
        features: features
    };
    return car;
}
;
const Car = car("Mercedes-Benz", "E-Class", "Royal-Blue", ["Front Engine", "Rear wheel drive"]);
console.log(Car);
