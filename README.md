# Julie-JS-Project9-Events-Simplest

This function is to change the background color of the entire body when the user clicks the submit button on the form.  

As of 3/12, after researching how to call and nest functions, I finally got this to work.  The entire page
starts out as the default white background color.  Clicking the Submit button changes the page to a new, 
random background color. Finally!


P.S., I'm so happy with this silly little thing that I just spent the last 10 minutes changing my background color over and over and over .... :)

Prior issues: the background color is also changed randomly when the page is loaded. As of 3/9/2021, it still has this issue.


Taking the rough, messy comments out of my code and putting them here:

//event example from MDN, adapted
//to work when I click the submit button
//on the Text Form
//only issue is this changes the background
//color whenever the page is loaded
//tried anonymous function with prevent default
//(see below), did not work
// document.querySelector(".button").addEventListener("click", function (e) {
//   const rndCol =
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//   document.body.style.backgroundColor = rndCol;
//   e.preventDefault;
// });

//also tried adding CSS to the body tag to style
//the background color white, did not work

//finally, turned this into an event listener
//trying to get the function to run only
//when the submit button is clicked
//this didn't work either, will come back to this

