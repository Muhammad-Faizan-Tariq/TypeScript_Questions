"use strict";
/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about
these items, such as “I would like to own a Honda motorcycle.” */
Object.defineProperty(exports, "__esModule", { value: true });
let transport = ["Honda70", "Honda125", "RoadPrince", "Yamha", "Suzuki Bike", "Honda Cvic", "Prius", "WagonR", "Cultus", "Honda GLI"];
for (let idx = 0; idx < transport.length; idx++) {
    console.log(`I would like to own a ${transport[idx]}`);
}
