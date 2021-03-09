//event example from MDN, adapted
//to work when I click the submit button
//on the Text Form, one issue not fixed,
//see the readme.md

const form = document.querySelector("#text-form");
// Load all event listeners
loadEventListeners();

// Define the event listeners
function loadEventListeners() {
  // bgcolor to change background color on body
  form.addEventListener("submit", bgColor());
}

// const btn = document.querySelector("#txt-btn");
function bgColor() {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
