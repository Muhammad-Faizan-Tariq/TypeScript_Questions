"use strict";
/* Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let places = ["Lahore", "Karachi", "Islamabad", "Quetta", "Murree"];
console.log("Original order:", places); //original order
console.log("Alphabetic order:", [...places].sort()); //alphabetical order without modifying the actual list
console.log("Original order:", places); //still in its original order
console.log("Reverse alphabetical order:", [...places].sort().reverse()); //reverse alphabetical order without changing the order of the original list
console.log("Original order:", places); //array is still in its original order
places.reverse(); // Reverse the order of the list
console.log("Reversed order:", places); //changed order
places.reverse(); // Reverse the order of the list again
console.log("Original order:", places); //back to its original order
places.sort(); // Sort the array in alphabetical order
console.log("Sorted order:", places); // Print the array to show the changed order
places.reverse(); // Reverse the order of the list again
console.log("Reverse alphabetic order:", places); //reverse alphabetic order
