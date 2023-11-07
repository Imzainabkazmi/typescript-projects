// Excercise 17 Shrinking Guest List
 
let guestList: Array<string> =[
    "Zainab Kazmi",
    "Amber Jan",
    "Tooba Riaz",
    "Maheen Zia",
    "Mahnoor Khan",
    "Bakhtawar Gul"
];
console.log("I can only invite two people for dinner")
while (guestList.length>2) {
    let removeGuest = guestList.pop()
    console.log(`Sorry ${removeGuest}, I cannot invite you to the dinner.`)
};
for (let guest of guestList) {
    console.log(`Hello ${guest}, you are still invited to the dinner.`)
};
guestList.pop();
guestList.pop();
console.log(`Guest list after the dinner: ${guestList}`);
