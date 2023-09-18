// PROMISE -> a placeholder for FUTURE VALUE (can be good or can be bad)
// -> while you are waiting you are in PENDING
// -> FULFILLED -> when you get desired value
// -> REJECTED -> When you get error...

// Fetch api -> This is how you connect to the SERVERs...

console.log("--------- fetching the data from github- -------- ");

// Fetch is nothing but a promise......

fetch("https://api.github.com/users") // 5 sec
  .then((response) => {
    return response.json(); // 1sec
  })
  .then((data) => {
    // i can create beautiful UI

    console.log(data);
  });

console.log("---------- END OF DATA --------- ");

// function addQuoteToDOM(quote) {
//   const bodyElement = document.body;

//   const h1Element = document.createElement("h1");
//   h1Element.innerText = quote;

//   bodyElement.append(h1Element);
// }

// function fetchQUote() {
//   const url = "https://api.kanye.rest asdasdasdasdasd/";

//   fetch(url) // 5 sec
//     .then((response) => response.json()) // 5sec
//     .then((data) => {
//       console.log(data);
//       // bad code
//       // const quote = data["quote"];
//       const { quote } = data;
//       console.log(quote, "QUOTE debug");

//       // i here i am playing with the data
//       addQuoteToDOM(quote);
//     })
//     .catch((error) => {
//       console.log(error);
//       addQuoteToDOM("soory");
//     });

// }

// fetchQUote();

// ways to consume promise ...
// WAY 1 ->

// .then
// .catch

// WAY 2 -> async wait

// ----------- ASYNC AWAIT (better promise) ----------
// syntatical sugar

// async function Return a PROMISE

async function quoteKanye() {
  try {
    const url = "https://api.kanye.rest sdasdasdasdasdasdas/";
    const response = await fetch(url);
    const data = await response.json();

    const { quote } = data;

    return quote;
  } catch (Errro) {
    addQuoteToDOM("sorry");
    // handling of the error
  }
}

// Way 1
// quoteKanye().then((data) => {
//   addQuoteToDOM(data);
// });

// way 2 (PREFERABLE)

async function getQuote() {
  const quotes = await quoteKanye();

  addQuoteToDOM(quotes);

  console.log("getQuote debug", quotes);
}

getQuote();

// const promiseObj = quoteKanye();
// console.log(promiseObj, "[promise Obj debug");
