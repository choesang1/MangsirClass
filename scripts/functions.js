// let a = "10";
// let b = 20;
// console.log(a + b);

// function xyz(name) {
//   return `hello ${name}`;
// }
// const result = xyz("mandip");

// console.log(result);

// setTimeout(() => {
//   console.log("hello world");
// }, 1000);

// console.log("log from bottom");

// function sum(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }
// let finalSum = sum(1, 2, 3, 7);
// console.log(finalSum);

// try {
//   let firstName = "kelz";
//   let lastName = "grg";
//   let fullName = firstName + " " + lastName;
//   console.log(fullName);
// } catch (error) {
//   console.log("this is error", error.message);
// }

// //traditional function
// function add(x, y) {
//   return x + y;
// }
// const additionValue = add(1, 2);
// console.log(additionValue);

// //   arrow fucniton

// const add2 = (x, y) => {
//   return x + y;
// };
// const additon2 = add(1, 1);
// console.log(additon2);

// function helloWorld() {
//   let message = "hellow";
//   setTimeout(() => {
//     console.log(message);
//   }, 3000);
// }

// function helloWorld() {
//   let message = "world";
//   setTimeout(() => {
//     console.log(message);
//   }, 3000);
// }
// helloWorld();

const showAlert = (type, message) => {
  console.log(`${type}:${message}`);
};
showAlert("warning", "failed");

let users = ["ant", "jas", "kelz", "sandip", "rohan"];

const signUp = (k) => {
  const registerUser = users.find((kelz) => kelz === k); 
  //kelz.trim()===name.trim() used if u want to get rid of space
  if (registerUser) {
    console.log(
      "register user=",
      registerUser,
      `& email : ${registerUser}@gmail.com`
    );
    showAlert("success", "registered");
  } else {
    console.log("not registered", "sorry");
    showAlert("warning", "failed");
  }
};
signUp("ant");
signUp("ram");

console.log(3 < 2);
