const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// BUBBLING PHASE (DEFAULT PHASE by default it is false) (ALWAYS USE THIS ) -> 100% you know the target

// grandParent.addEventListener("click", (event) => {
//   console.log("grandParent clicked");
// });

// parent.addEventListener(
//   "click",
//   (event) => {
//     console.log("parent clicked");
//   },
//   false
// );

// ---------  CAPUTRING PHASE ------

grandParent.addEventListener(
  "click",
  () => {
    console.log("grandParent clicked");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true
);
