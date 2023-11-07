"use strict";
// Excercise 15   Changing Guestlist
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = [
    "Zainab Kazmi",
    "Amber Jan",
    "Tooba Riaz"
];
exports.guestList = guestList;
let guestWhoCannotCome = "Tooba Riaz";
console.log(`${guestWhoCannotCome} cannot make it to the dinner`);
let newGuest = "Maheen Zia";
let indexofguestWhoCannotCome = guestList.indexOf(guestWhoCannotCome);
if (indexofguestWhoCannotCome !== -1) {
    guestList[indexofguestWhoCannotCome] = newGuest;
}
console.log("Second set of invitation messages : ");
guestList.forEach((guest) => {
    console.log(`Dear ${guest} , you are invited to dinner please join us.`);
});
