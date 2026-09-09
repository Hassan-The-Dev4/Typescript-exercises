"use strict";
// // 1. UserRole Enum Usage
// // Create an enum called UserRole
// enum UserRole {
//     SuperAdmin = "superadmin",
//     Moderator = "moderator",
//     Viewer = "viewer"
// }
// function canEdit(role: UserRole): boolean {
//     return role !== UserRole.Viewer;
// }
// console.log("Superadmin can edit:", canEdit(UserRole.SuperAdmin));
// console.log("Moderator can edit:", canEdit(UserRole.Moderator));
// console.log("Viewer can edit:", canEdit(UserRole.Viewer));
// 2.Type Assertion with "as"
const button = document.querySelector("button"); // Handle a missing button safely
if (button) {
    button.disabled = true;
    console.log("Button disabled:", button.disabled);
}
else {
    console.log("Button was not found.");
}
