const form = document.getElementById("booking-form");

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
