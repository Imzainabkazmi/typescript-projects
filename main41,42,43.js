"use strict";
function show_magician(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
const magician = ["Criss Angel", "David Copperfield", "David Blaine"];
show_magician(magician);
// Exercise 42: Great Magicians
let greeting;
function make_greet(greet_name) {
    greeting = greet_name.map((value) => (`The Great ${value}`));
    return greeting;
}
console.log(make_greet(magician));
// Exercise 43: Magicians Array
const greet = Array(3);
greet.fill("Great ");
const m_names = ["Criss Angel", "David Copperfield", "David Blaine"];
function show_magiciann() {
    const addtwo = m_names.map((value, index) => (`${value}  ${greet[index]}  `));
    return addtwo;
}
console.log(show_magiciann());
