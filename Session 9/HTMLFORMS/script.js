const form = document.getElementById("booking-form");

const nameElement = form.elements["fullName"];
const emailElement = form.elements["email"];
const doctorElement = form.elements["doctor"];
const locationElement = form.elements["location"];
const dateElement = form.elements["date"];

const nameInfoElement = document.getElementById("name-info");

// EVENTS --------- Blur and FOCUS

nameElement.addEventListener("focus", () => {
  console.log("name focused");
  nameInfoElement.innerHTML = "";
});

// VALIDATION
nameElement.addEventListener("blur", (event) => {
  const name = event.target.value.trim();
  const nameRegex = /^[a-zA-Z]+$/;

  if (!name) {
    nameInfoElement.innerHTML = "Name is required";
  } else if (name.length < 6) {
    nameInfoElement.innerHTML = "Name is too short";
  } else if (!name.match(nameRegex)) {
    nameInfoElement.innerHTML = "Enter valid name";
  }

  // if (name.match(nameRegex)) {
  //   // it is valid nice
  // } else {
  //   nameInfoElement.innerHTML = "Error ouucured";
  // }

  console.log(name);
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

  // JSON -> key

  fetch("gmail.com", { method: "POST", body: JSON.stringify(payload) });

  console.log(payload);
});

// JSON.stringify -> convert Object to String

// JSON.parse -> COnvert String to Object
