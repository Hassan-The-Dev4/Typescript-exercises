

//  Define and Use an Interface


// interface User {
//     username: string;
//     password: string;
// }

// function login(user: User): void {
//     console.log(`Welcome ${user.username}`);
// }

// const user1: User = {
//     username: "Hassan",
//     password: "123456"
// };

// login(user1);




//  Use Optional Properties

// interface UserWithEmail {
//     username: string;
//     password: string;
//     email?: string;
// }

// const user2: UserWithEmail = {
//     username: "Ali",
//     password: "123456",
//     email: "ali@example.com"
// };

// console.log(user2);



// Readonly in Action


interface UserWithId {
    readonly id: number;
    username: string;
    password: string;
}

const user3: UserWithId = {
    id: 1,
    username: "Ahmed",
    password: "123456"
};

console.log(user3);



