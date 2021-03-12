//When I click the submit button,
// I get the entire page to change
//to a random background color.

const btn = document.querySelector("#txt-btn");

btn.addEventListener("click", bgColor);

function bgColor(e) {
  let randomNum = function () {
    return Math.floor(Math.random() * (255 + 1));
  };

  document.body.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  e.preventDefault();
}
