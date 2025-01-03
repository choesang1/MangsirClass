//gotta do documentation research when time allows

//promise (resolve,reject)
//callbacks

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("server error");
    resolve({
      data: {
        name: "john",
        email: "john@gmail.com",
      },
    });
  }, 3000);
});

let server = console.log(promise);

promise
  .then((data, err) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// let promise1 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         // reject("server error")

//         resolve("data")},1000)

// })

// console.log(promise1)

// promise1.then((response)=>{
//     console.log('gg');
//     console.log(response)
// })
// .catch((err)=>{
//     console.log(err)
// })

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log("this is data", data))
  .catch((error) => console.log("fetching error", error));

const firstPromise = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} . first promise resolved`);
    }, 1500);
  });
};

const secondPromise = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} . second promise resolved`);
    }, 1500);
  });
};

firstPromise("kelz world ")
.then((result)=>console.log(result))
.catch((error)=>console.log(error))

secondPromise("kelz world 2 ")
.then((result)=>console.log(result))
.catch((error)=>console.log(error)) 

console.log('kelz');
//https://github.com/choesang1
