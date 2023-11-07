// Excercise 15   Changing Guestlist

let guestList: Array<string> =[
    "Zainab Kazmi",
    "Amber Jan",
    "Tooba Riaz"
];
let guestWhoCannotCome : string ="Tooba Riaz"
console.log(`${guestWhoCannotCome} cannot make it to the dinner`)

let newGuest : string = "Maheen Zia"
let indexofguestWhoCannotCome : number = guestList.indexOf(guestWhoCannotCome)

if (indexofguestWhoCannotCome !== -1) {
    guestList[indexofguestWhoCannotCome] = newGuest
}

console.log("Second set of invitation messages : ")
guestList.forEach((guest:string) =>{
    console.log(`Dear ${guest} , you are invited to dinner please join us.`)
})
export{guestList};