// HOW to create a promise - >

// 1. new Promise();

// 2. async keyword ex: async function abcd()

// CREATION

// const abcdPromise = new Promise((resolve, reject) => {
//   // It is fetching the data from the server  // this line may take 5sec

//   try {
//     const data = XMLHttpRequest.caller("url"); // they connect with Server
//     // It is fetching the data from the server  // this line may take 5sec
//     // const data = 12;
//     // resolve(data);

//     if (data === 12) {
//       reject("Data is stale");
//     } else {
//       resolve(data);
//     }
//   } catch (error) {
//     // you have to reject in catch
//     reject("Datalake error 404 not found", error);
//   }

//   // reject()
//   // console.log("hello world");
// });

// // CONSUMPTION OF PROMISE

// abcdPromise.then((data) => {
//   console.log(data, "data debug");
// });

// fetch().then;

// Activity - Greet Both or Greet None!

const greetRohan = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Rohan!";

    resolve(greeting);
  } catch (error) {
    reject(new Error(error));
  }
});

const greetShyam = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Shyam!";

    aasdadsasda;
    reject(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

greetRohan
  .then((data) => {
    console.log("1 debug", data);

    // return greetShyam;

    return greetShyam;
  })
  .then((data) => {
    console.log("2 debug", data);
  })

  .catch((error) => console.log("I dont want to greet anyone", error));
