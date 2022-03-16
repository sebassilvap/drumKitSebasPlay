// alert("Hello!"); // --> just to verify that the index.js file is correctly linked

/* ----- EXAMPLE -----
// Giving the functionality to the button - PRINCIPLES
// ---------------------------------------------------
document.querySelector("button").addEventListener("click", handleClick);

function handleClick () {
  alert("I got clicked!");
}

*/


/* ----- EXAMPLE -----
// With an anonymous function
// -------------------------
document.querySelector("button").addEventListener("click", function() {
  alert("I got clicked!");
});

*/


/* ----- EXAMPLE -----
// Giving the functionality to all the buttons with "querySelectorAll":
// -------------------------------------------------------------------
document.querySelectorAll("button")[0].addEventListener("click", handleClick); // 1st button
document.querySelectorAll("button")[1].addEventListener("click", handleClick); // 2nd button
// ...
// .. (and we do this for the seven buttons)

*/


/* ----- EXAMPLE -----
// Giving the functionality to all the buttons WITH A LOOP
// ------------------------------------------------------
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++ ) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    alert("I got clicked!");
  });
}
*/


/* ----- EXAMPLE -----
// For playing sounds on JavaScript
// --------------------------------
var audio = new Audio("sounds/tom-1.mp3") // the path of the audio that we want to play
audio.play() // the method to play the audio

*/

/* ----- EXAMPLE -----
// Changing the color of the button applying THIS
// ----------------------------------------------
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++ ) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //console.log(this.innerHTML); // this will print the text that we have on the button when we click it!
    this.style.color = "white"; // when I click on the button, I change the text color!!
  });
}

*/

// **********************************************************************************
// ******** || DETECTING BUTTON PRESS || ********
// **********************************************************************************

// ********* ADDING AN EVENT-LISTENER TO EACH BUTTON & ADDING A DRUM SOUND *********
// --> what happens when we click / press the button

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


// **********************************************************************************
// ******** || DETECTING KEYBOARD PRESS || ********
// **********************************************************************************

// ********* ADDING KEY EVENT LISTENER *********

/* ----- EXAMPLE -----
// Just a simple example when I press any key
// -----------------------------------------

document.addEventListener("keypress", function () {
  alert("key was pressed!");
});

*/

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


// ********* CREATING A FUNCTION --> makeSound *********

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(key); // else statement for switch
  }
}


// **********************************************************************************
// ******** || ADDING ANIMATION TO THE BUTTONS || ********
// **********************************************************************************

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed")
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
