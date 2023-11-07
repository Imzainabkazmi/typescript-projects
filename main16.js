"use strict";
// Excercise 16  More Guests
let guestList = [
    "Zainab Kazmi",
    "Amber Jan",
    "Tooba Riaz"
];
for (let guest of guestList) {
    console.log(`Hello ${guest}, we found a bigger dinner table so we will be inviting more of our friends.`);
}
;
let newGuestintheBeginning = "Mahnoor Khan";
guestList.unshift(newGuestintheBeginning);
let newGuestintheMiddle = "Bakhtawar Gul";
let middleindex = Math.floor(guestList.length / 2);
guestList.splice(middleindex, 0, newGuestintheMiddle);
let newGuestintheEnd = "Maheen Zia";
guestList.push(newGuestintheEnd);
console.log("New set of invitation messages: ");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner please join us.`);
}
;
