"use strict";
// Excercise 22 Intentional Error
const languages = ["c++", "java", "python"];
console.log(languages.indexOf('python'));
console.log(`${languages[3]}`);
// Excercise 22....Conditional Tests
let marks = 90;
console.log(marks >= 90 ? "A+" : "Decide Later");
console.log(marks >= 85 && marks == 90 ? "A+" : "B");
console.log(marks >= 75 && marks <= 85 ? "B" : "C");
console.log(marks >= 65 && marks <= 74 ? "C" : "D");
console.log(marks >= 55 && marks <= 64 ? "C" : "D=> Fail");
console.log(marks < 55 ? "Fail" : "D");
console.log(marks != 90 ? true : false);
let vehicle = "car";
console.log(vehicle === "car" || vehicle === "cycle" ? true : false);
