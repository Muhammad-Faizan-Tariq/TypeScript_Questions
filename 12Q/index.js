"use strict";
/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized
with the person’s name. */
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Usama", "Daniyal", "Hammad", "Asad", "Mateen", "Shahab", "Zeeshan"];
for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} is an intelligent boy`);
}
