// Activity 1 -> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_ARRAYSIMPLEES6/

function removeListedValues(arr, without) {
  let newArr = arr.filter((item) => {
    if (without.includes(item)) {
      return false;
    } else {
      return true;
    }
  });

  return newArr;
}

module.exports = removeListedValues;

// Activity 2 -> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_OBJECTES6/

function personDetail(a, b) {
  let obj = {
    firstName: a,
    lastName: b,
    fullName: a + " " + b,
  };

  return obj;
}

module.exports = personDetail;

// Activity 3 -> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_DATEES6/

function getNumberOfDays(date) {
  // dd/ mm. yy
  // const todaysDateTime = new Date().getTime() // greater
  const todaysDateTime = new Date().setUTCHours(0, 0, 0, 0); // getTime()

  const arr = date.split("/");
  date = arr[1] + "/" + arr[0] + "/" + arr[2]; // stringDate mm/dd/yyy
  const givenDateTime = new Date(date).setUTCHours(0, 0, 0, 0); // smaller

  const timeDifference = todaysDateTime - givenDateTime;

  const days = timeDifference / (1000 * 60 * 60 * 24);

  return Math.floor(days);
}

module.exports = getNumberOfDays;

// Activity 4 -> https://www.crio.do/learn/PSDS/ME_FE2_ES6_PRACTICE/ME_FE2_ES6_PRACTICE_MODULE_ARROWES6/

let modify = (array) => {
  const modifiedArr = array.map(function (item) {
    if (isPrime(item)) {
      return item + 1;
    } else {
      return 2 * item;
    }
  });

  return modifiedArr;
};

function isPrime(n) {
  if (n == 0 || n == 1) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

module.exports = modify;
