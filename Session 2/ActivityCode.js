// Activity 1 -> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_TRYCATCHES6/

// function errorHandler(x) {

//     try {
//         const val = getX(x);
//         return val;
//     } catch(error) {

//         // show the beautiful UI
//         return error;
//     }

// }

// function getX(x) {
//   if (x == 5) {
//     throw new Error("Error Occured");
//   }
//   return x;
// }

// module.exports = errorHandler;

// Activity 2 -> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_THROWES6/

// function isAlphabet(X) {
//   try {
//     const result = checkAlphabet(X);

//     if (result) {
//       return "Yes";
//     } else {
//       const errorObj = new Error("Not Alphabet");
//       // return errorObj; // wrong

//       throw errorObj;
//     }
//   } catch (error) {
//     // handle
//   }
// }

// // function sum(a,b) {
// //       try {
// //             return a +b;

// //       } catch (error) {
// //             throw new Error("Invalid character ")
// //       }
// // }

// function checkAlphabet(X) {
//   if (x == "a") {
//     throw Error();
//   }

//   let n = X.charCodeAt(0);

//   let strStartsWithALetter = (n >= 65 && n < 91) || (n >= 97 && n < 123);

//   if (strStartsWithALetter) {
//     return true;
//   } else {
//     return false;
//   }
// }

// module.exports = isAlphabet;

// Activity 3 -> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_FOREACHES6/

function convertArray(arr) {
  arr.forEach((el, index, array) => {
    array[index] = (index + 1) * el;
  });

  return arr;
}

module.exports = convertArray;

// Activity -4 -> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_MAPES6/assessment/

function findLength(arr) {
  ["abc", null, undefined];
  const newArr = arr.map((ele) => {
    if (ele === null || ele === undefined) {
      return 0;
    } else {
      return ele.length;
    }
  });

  return newArr;
}

module.exports = findLength;

// Activity 5 -> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_FILTERES6/

function filterByCity(arr) {
  const filteredArr = arr.filter((ele, inex, arr) => {
    let { city } = ele;
    city = city.toLowerCase();

    if (city === "bangalore" || city === "hyderabad") {
      return true;
    } else {
      return false;
    }
  });

  return filteredArr;
}

// [{city: "BanGALORE", name: "akash"}, {city: "delhi", name: "utkarsh"}, {}, {}]

module.exports = filterByCity;
