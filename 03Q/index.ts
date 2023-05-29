/* Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase. */

let personName:string = "muHammaD faiZan TariQ";

let inLowercase = personName.toLowerCase();
let inUppercase = personName.toUpperCase();
let inTitlecase = personName.split(" ");
    for(let i=0; i<inTitlecase.length; i++){
        inTitlecase[i] = inTitlecase[i].charAt(0).toUpperCase() + inTitlecase[i].slice(1).toLowerCase();
}

console.log("Peron Name in lower case: " + inLowercase);
console.log("Person Name in upper case: " + inUppercase);
console.log("Person Name in title case: " + inTitlecase.join(" "));


export {}