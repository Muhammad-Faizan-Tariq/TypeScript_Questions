"use strict";
/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed. Then print the name after striping
the white spaces.*/
var PersonName1 = "\t Muhammad Faizan Tariq";
var PersonName2 = "\n Allam Iqbal \n";
var Remove_WhitSpace1 = PersonName1.trim();
var Remove_WhitSpace2 = PersonName2.trim();
console.log("Name with whitespace: " + PersonName1);
console.log("Name without whitespace: " + Remove_WhitSpace1);
console.log("Second Name: " + PersonName2);
console.log("Second Name without whitespace: " + Remove_WhitSpace2);
