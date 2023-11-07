//Excercise 18 Seeing the World

let travelDestination:string[]=["Madina","Switzerland","New York","Egypt","India"];
console.log("Original Order: ");
console.log(travelDestination);
console.log("The actual list sorted into alphabetical order: ");
console.log([...travelDestination].sort());
console.log("\nPrinting the Original Order again: ");
console.log(travelDestination);
console.log("The actual list sorted into Reverse alphabetical order: ");
console.log([...travelDestination].sort().reverse());
console.log("\nPrinting the Original Order again: ");
console.log(travelDestination);
console.log("\nPrinting the Original Order in Reverse: ");
travelDestination.reverse();
console.log(travelDestination);
console.log("\nPrinting the Original Order again: ");
travelDestination.reverse();
console.log(travelDestination);
console.log("\nSorted into Alphabetical order:")
travelDestination.sort();
console.log(travelDestination);
console.log("\nSorted into Reverse Alphabetical order:")
travelDestination.sort().reverse();
console.log(travelDestination)
