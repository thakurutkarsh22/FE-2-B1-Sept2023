abc();

abcCopy();

//  Function declaration
function abc() {
  console.log("abc");
}

// Function expression
const abcCopy = () => {
  console.log("abc copy");
};

// abc();

// abcCopy();

var a; // hoisted

a = 12; // NOT hoisted

// try {
//     // code
// } catch() {
//     throw new Error()
// }
