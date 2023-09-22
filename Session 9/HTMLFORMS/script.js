const form = document.getElementById("booking-form");

const nameElement = form.elements["fullName"];
const emailElement = form.elements["email"];
const doctorElement = form.elements["doctor"];
const locationElement = form.elements["location"];
const dateElement = form.elements["date"];

const nameInfoElement = document.getElementById("name-info");
const emailInfoElement = document.getElementById("email-info");
const sumbitButton = document.getElementById("submit-btn");

function validation(payload) {
  const { name } = payload;

  let isvalid = true;
  const nameRegex = /^[a-zA-Z]+$/;

  if (!name) {
    isvalid = false;
    nameInfoElement.innerHTML = "Name is required";
  } else if (name.length < 6) {
    isvalid = false;

    nameInfoElement.innerHTML = "Name is too short";
  } else if (!name.match(nameRegex)) {
    isvalid = false;

    nameInfoElement.innerHTML = "Enter valid name";
  }

  return isvalid;
}

// EVENTS --------- Blur and FOCUS

nameElement.addEventListener("focus", () => {
  console.log("name focused");
  nameInfoElement.innerHTML = "";
});

// VALIDATION
nameElement.addEventListener("blur", (event) => {
  let isvalid = true;

  const name = event.target.value.trim();
  const nameRegex = /^[a-zA-Z]+$/;

  if (!name) {
    isvalid = false;
    nameInfoElement.innerHTML = "Name is required";
  } else if (name.length < 6) {
    isvalid = false;

    nameInfoElement.innerHTML = "Name is too short";
  } else if (!name.match(nameRegex)) {
    isvalid = false;

    nameInfoElement.innerHTML = "Enter valid name";
  }

  if (!isvalid) {
    sumbitButton.disabled = true;
  } else {
    sumbitButton.disabled = false;
  }

  console.log(name);
});

emailElement.addEventListener("focus", () => {
  console.log("name focused");
  emailInfoElement.innerHTML = "";
});

emailElement.addEventListener("blur", (event) => {
  let isvalid = true;

  const email = event.target.value.trim();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email) {
    isvalid = false;
    emailInfoElement.innerHTML = "Eamil is required";
  } else if (email.length < 6) {
    isvalid = false;

    emailInfoElement.innerHTML = "Email is too short";
  } else if (!email.match(emailRegex)) {
    isvalid = false;
    emailInfoElement.innerHTML = "Enter valid email";
  }

  if (!isvalid) {
    sumbitButton.disabled = true;
  } else {
    sumbitButton.disabled = false;
  }

  console.log(email);
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // this prevents reload of the page ...
  console.dir();

  const form = event.target;

  const name = form.elements["fullName"].value;
  const email = form.elements["email"].value;
  const doctor = form.elements["doctor"].value;
  const location = form.elements["location"].value;
  const date = form.elements["date"].value;

  const payload = {
    name,
    email,
    doctor,
    location,
    dateChoosen: date,
  };

  const resultOfValidaion = validation(payload);

  // JSON -> key

  if (resultOfValidaion) {
    fetch("server.com", { method: "POST", body: JSON.stringify(payload) });
  } else {
    console.log("fix your error in the form ");
    alert("fix your erros");
  }

  console.log(payload);
});

function isInvalidNames(name) {
  const invalidnames = ["superman", "batman", "iron man"]; // API call   // ivalid names list
  return invalidnames.includes(name) ? true : false;
}

nameElement.addEventListener("blur", (event) => {
  const name = event.target.value.trim();
  if (isInvalidNames(name)) {
    // alert("superhero found");
    nameInfoElement.innerHTML = "Superhero found !!!";
  } else {
  }
});

// JSON.stringify -> convert Object to String

// JSON.parse -> COnvert String to Object

// CUt event copy event

// emailElement.addEventListener("paste", (event) => {
//   event.preventDefault();
// });

// emailElement.addEventListener("copy", (event) => {
//   event.preventDefault();
// });

// document.body.addEventListener("copy", (event) => {
//   event.preventDefault();
// });

// Prevent CHEATING  ---- - -
// document.addEventListener("visibilitychange", function() {
//   if (document.hidden){
//       console.log("Browser tab is hidden")
//       alert("!!! cheating ")
//   } else {
//       console.log("Browser tab is visible")
//   }
// });

// -------------------- LOCAL STORAGE ------------------------

window.addEventListener("beforeunload", (event) => {
  let payload = {
    name: nameElement.value,
    email: emailElement.value,
  };

  localStorage.setItem("formData", JSON.stringify(payload));
});

document.addEventListener("DOMContentLoaded", () => {
  const payload = JSON.parse(localStorage.getItem("formData"));
  const { name, email } = payload;
  console.log("DOMContentLoaded", name, email);

  nameElement.value = name;
  emailElement.value = email;

  window.history.pushState("/google.com");
});

// Debouncing ????

// setTimeout(() => {
//   alert('you are inactive')
// }, 5000)
// kaslkjdakdjalskdjaskljd

// LONG polling

/// web sockets ....

document.addEventListener("input", (event) => {
  console.log(event.target.value);
});
