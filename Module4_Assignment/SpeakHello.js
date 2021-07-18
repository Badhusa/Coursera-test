// // STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// // See Lecture 52, part 2


// // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// // the "speak" method and which you will expose to the global context
// // See Lecture 52, part 1
// // var helloSpeaker =

// // DO NOT attach the speakWord variable to the 'helloSpeaker' object.


// // STEP 4: Rewrite the 'speak' function such that it is attached to the
// // helloSpeaker object instead of being a standalone function.
// // See Lecture 52, part 2

// /
// // STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// // 'helloSpeaker' on the global scope as well.
// // See Lecture 52, part 2
// // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// // xxxx.xxxx = helloSpeaker;
// (function (window) {
//   var yaakovGreeter = {};
//   yaakovGreeter.name = "Yaakov";
//   var greeting = "Hello ";
//   yaakovGreeter.sayHello = function () {
//     console.log(greeting + yaakovGreeter.name);
//   }

//   window.yaakovGreeter = yaakovGreeter;

// })(window);
(function (window) {
  var prankGreeter = {};
  prankGreeter.name = "Yakov";
  var greeting = "Hello ";
  prankGreeter.sayHello = function () {
    console.log(greeting + prankGreeter.name);
  }

  window.prankGreeter = prankGreeter;

})(window);
(function (window) {
  var frankGreeter = {};
  frankGreeter.name = "Frank";
  var greeting = "Hello ";
  frankGreeter.sayHello = function () {
    console.log(greeting + frankGreeter.name);
  }

  window.frankGreeter = frankGreeter;

})(window);
(function (window) {
  var larryGreeter = {};
  larryGreeter.name = "Larry";
  var greeting = "Hello ";
  larryGreeter.sayHello = function () {
    console.log(greeting + larryGreeter.name);
  }

  window.larryGreeter = larryGreeter;

})(window);
(function (window) {
  var paulaGreeter = {};
  paulaGreeter.name = "Paula";
  var greeting = "Hello ";
  paulaGreeter.sayHello = function () {
    console.log(greeting + paulaGreeter.name);
  }

  window.paulaGreeter = paulaGreeter;

})(window);
(function (window) {
  var lauraGreeter = {};
  lauraGreeter.name = "Laura";
  var greeting = "Hello ";
  lauraGreeter.sayHello = function () {
    console.log(greeting + lauraGreeter.name);
  }

  window.lauraGreeter = lauraGreeter;

})(window);
(function (window) {
  var paulGreeter = {};
  paulGreeter.name = "Paul";
  var greeting = "Hello ";
  paulGreeter.sayHello = function () {
    console.log(greeting + paulGreeter.name);
  }

  window.paulGreeter = paulGreeter;

})(window);
