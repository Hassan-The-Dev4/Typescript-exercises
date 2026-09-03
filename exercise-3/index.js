"use strict";
// Add Types to a Function
// function fullName(first: string, last: string): string {
//   return first + " " + last;
// }
// console.log(fullName("Hassan", "Abdi"));
// Optional and Default Parameters
// function registerUser(username: string, isAdmin?: boolean, language: string = "en"): void {
//   console.log("Username:", username);
//   console.log("Is Admin:", isAdmin);
//   console.log("Language:", language);
// }
// registerUser("Hassan");
// registerUser("Ali", true);
// registerUser("Ahmed", false, "so");
// Create a Safe Rest Function
function average(...scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(average(80, 90, 70));
console.log(average(85, 75, 95, 90));
console.log(average(100, 80, 70, 90, 60));
