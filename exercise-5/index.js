"use strict";
// 1 Echo Function with Generics
// function echo<T>(input: T): T {
//     return input;
// }
// // String
// const message = echo("Hello TypeScript");
// console.log(message);
// // Number
// const age = echo(25);
// console.log(age);
// // Array
// const numbers = echo([10, 20, 30]);
// console.log(numbers);
// // Object
// const user = echo({
//     id: 1,
//     name: "Hassan"
// });
// console.log(user);
// 2 Generic Interface
// interface ApiResult<T> {
//     status: string;
//     data: T;
// }
// //<string>
// const messageResult: ApiResult<string> = {
//     status: "success",
//     data: "Data loaded successfully"
// };
// console.log(messageResult);
// // <Object>
// const userResult: ApiResult<{ id: number; name: string }> = {
//     status: "success",
//     data: {
//         id: 1,
//         name: "Hassan"
//     }
// };
// console.log(userResult);
// 3 First Element Function
function first(items) {
    return items[0];
}
// Array of numbers
// const firstNumber = first([10, 20, 30]);
// console.log(firstNumber);
// Array of strings
// const firstName = first(["Hassan", "Ahmed", "Ali"]);
// console.log(firstName);
// Array of objects
const firstUser = first([
    { id: 1, name: "Hassan" },
    { id: 2, name: "Ahmed" }
]);
console.log(firstUser);
