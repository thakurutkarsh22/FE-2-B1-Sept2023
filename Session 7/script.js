//

// const incrementButton = document.getElementById("incButton");
// const decrementButton = document.getElementById("decButton");
// const counter = document.getElementById("count");

// incrementButton.addEventListener("click", (event) => {
//   console.log("hey there increment clicked", event);

//   counter.innerText = Number(counter.innerText) + 1;
// });

// decrementButton.addEventListener("click", (event) => {
//   console.log("hey there decrement clicked");

//   counter.innerText = Number(counter.innerText) - 1;
// });

// HTML inputs

let payload = {
  name: "",
  email: "",
};

const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const submitElement = document.getElementById("btn");

nameElement.addEventListener("input", (event) => {
  const inputElement = event.target;
  const { value } = inputElement;

  payload.name = value;

  console.log(value, "input name debug");
});

emailElement.addEventListener("input", (event) => {
  const value = event.target.value;

  payload.email = value;

  console.log(value, "input email debug");
});

submitElement.addEventListener("click", () => {
  // send the payload to the server
  console.log(payload);
});
