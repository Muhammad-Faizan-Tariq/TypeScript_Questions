"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
const guestList = ["Usama", "Ibrar", "Danial"];
console.log("Sorry! we invite only two people at tonigh dinner"); //Print message
console.log(`Sorry ${guestList.pop()}! we can't invite to you`); //remove last guest
for (let i = 0; i < guestList.length; i++) {
    console.log(`Congratulations ${guestList[i]}! You are invited at tonigh dinner `); // print message to all two guest.
}
while (guestList.length > 0) {
    guestList.pop();
}
console.log(guestList); //Print empty list/Array will 
