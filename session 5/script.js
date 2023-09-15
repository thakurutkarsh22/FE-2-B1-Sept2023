// console.log("hello");

// window.console.log("hello 2");

// // NEVER USE THIS, THSI IS NTO A SOLUTION...

// // for (let i = 0; i < 100000000000000; i++) {
// //   //   console.log("delayed hello");
// // }

// // Set time out take time in milli seconds
// // if you want 1s give 1000
// // 5s  = 5 * 1000

// setTimeout(() => {
//   console.log("delayed hello");
// }, 10000);

// console.log("bye");

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// console.log("3");

//

// console.log(1);

// setTimeout(() => {
//   console.log(3);
// }, 3000);

// setTimeout(() => {
//   console.log(4);
// }, 2000);

// console.log(2);
// ...   ... more lines

// output

console.log(1);

setTimeout(() => {
  console.log(3);
}, 0);

setTimeout(() => {
  console.log(4);
}, 0);

console.log(2);
