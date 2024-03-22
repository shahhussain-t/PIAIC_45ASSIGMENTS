"use strict";
// Q32) Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ['Shah hussin', 'Yasir hussain', 'Usman hussain', 'Ahmed', 'Basit'];
let new_users = ['Manzaar', 'syed Maaz', 'Shah hussin', 'Basit', 'muneeb'];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
    let new_user_lower = new_users[i].toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`The ${new_user_lower} enter  a new username`);
    }
    else {
        console.log(`The ${new_user_lower} is avalible`);
    }
}
