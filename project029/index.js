"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let usernames = ["Admin", "Shah hussain", "Yasir", "Usman", "Basit"];
usernames.forEach((username) => {
    if (username === "Admin") {
        console.log(`Hello ${username}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
