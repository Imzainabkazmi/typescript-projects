"use strict";
//Hello Admin
let userName1 = ["Admin", "Eric", "Zainab", "Maheen", "Amber"];
for (let i = 0; i < userName1.length; i++) {
    if (userName1[i] === "Admin") {
        console.log(`Hello ${userName1[i]}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userName1[i]}, thank you for logging in again.`);
    }
}
