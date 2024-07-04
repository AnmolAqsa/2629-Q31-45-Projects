"use strict";
/*
Q31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

* If the list is empty, print the message We need to find some users!

* Remove all of the usernames from your array, and make sure the correct message is printed.
*/
let usernames = ["Anmol", "Aqsa", "Atif", "Admin", "Ayaan", "Arman"];
usernames = [];
if (usernames.length > 0) {
    for (let i = 0; i < usernames.length; i++)
        if (usernames[i] == "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
            console.log(`Hello ${usernames[1]}, thank you for logging in again.`);
        }
        else {
        }
    console.log(`\n We need to find some users.`);
}
else {
    console.log(`${usernames} We need to find some users.`);
}
