"use strict";
// question 1
// const productName: string = "Laptop";
// const price: number = 500;
// const discountAvailable: boolean = true;
// console.log(productName);
// console.log(price);
// console.log(discountAvailable);
// question 2
// function getDiscount(price: number, discount: number): number {
//   return price - discount;
// }
// const finalPrice: number = getDiscount(100, 15);
// console.log(finalPrice);
// question 3
function printLength(x) {
    if (typeof x === "string") {
        console.log(x.length);
    }
    else {
        console.log("This value does not have a length:", x);
    }
}
printLength("Hello");
printLength(123);
