"use strict";
// excercise 13 Your Own Array
let FavTransportation = [];
FavTransportation.push(["motorcycle", "Honda"]);
FavTransportation.push(["car", "Toyota"]);
FavTransportation.push(["bicycle", "Sohrab"]);
FavTransportation.forEach(([transport, brand]) => { console.log(`I would like to own a ${brand} ${transport}.`); });
