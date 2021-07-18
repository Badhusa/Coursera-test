// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "GoodBye ";
  johnGreeter.sayBye = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);
(function (window) {
  var jenGreeter = {};
  jenGreeter.name = "Jen";
  var greeting = "GoodBye ";
  jenGreeter.sayBye = function () {
    console.log(greeting + jenGreeter.name);
  }

  window.jenGreeter = jenGreeter;

})(window);
(function (window) {
  var jasonGreeter = {};
  jasonGreeter.name = "Jason";
  var greeting = "GoodBye ";
  jasonGreeter.sayBye = function () {
    console.log(greeting + jasonGreeter.name);
  }

  window.jasonGreeter = jasonGreeter;

})(window);
(function (window) {
  var jimGreeter = {};
  jimGreeter.name = "Jim";
  var greeting = "GoodBye ";
  jimGreeter.sayBye = function () {
    console.log(greeting + jimGreeter.name);
  }

  window.jimGreeter = jimGreeter;

})(window);

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =
// var byeSpeaker = {};
// // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
// var speakWord = "Good Bye";

// // STEP 8: Rewrite the 'speak' function such that it is attached to the
// // byeSpeaker object instead of being a standalone function.
// // See Lecture 52, part 2
// (function sayBye(name) {
//   console.log(speakWord + " " + name);
// })();

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
