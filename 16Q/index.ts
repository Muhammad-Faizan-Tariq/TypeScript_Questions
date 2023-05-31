// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

//Print Statement to infrorm the people
const moreGuest: Array<String> = ["Ali", "Usama", "Danial"]
console.log("Hey all! We found a bigger dinner table.");

moreGuest.unshift("Hammad"); //Add new guest at the begninning of array
moreGuest.splice(1,0, "Waseem"); //Add new guest at the middle of array
moreGuest.push("zain"); //Add new guest at the end of array

for(let i=0; i<moreGuest.length; i++){
    console.log(`Dear ${moreGuest[i]}! You are invited at tonight dinner`);
    
}

export {}