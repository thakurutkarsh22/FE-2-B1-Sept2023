/**
 * Add event listeners and handlers to
 * 1. Change the color of the "target" div
 * 2. Update the text Content on the "target" div
 */
const colorParent = document.getElementById("colors");
const targetDiv = document.getElementById("target");
colorParent.addEventListener("click", (event) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubble up to the parent.

  const targetElement = event.target;

  const id = targetElement.id;

  targetDiv.innerText = `Selected Color: ${id}`;
  targetDiv.style.background = id;

  console.log(color);
});
