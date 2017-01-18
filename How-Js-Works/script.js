////////////////////////////////
// Lecture: Hoisting

/*
  In the creation phase of the execution context, in this case the
  global execution context the function declaration
  calculateAge is stored in the variable object even before the code is executed,
  Thats why when we enter the execution phase the calculateAge function is already
  availabe for us to use it.
  We dont have to declare the function then use it. We can use it and then ready
  declare it
*/

/*  !!!!!!!!!!!!
 Good Thing about hoisting is to use function declaration before
 actually declaring it in our code
*/

calculateAge(1965)

function calculateAge(year) {
  console.log(2016 - year);
}

/*
  ERROR! the function is not a function declaration but instead a function expression
  and hoisting with functions only works on function declarations
*/

// retirement(1990) // This is ERROR!

var retirement = function(year) {
  console.log(65 - (2016 - year));
}
// retirement(1990); Here WOULD WORK

/*
  variables
*/

console.log(age); // Would not throw an UNDEFINED
var age = 23; // this age variable is stored in the global execution context

function foo() { // this foo function gets its own execution context object
  var age = 28; // this variables is stored inside this function
  console.log(age); // this log is 28
}
foo()
console.log(age); //This is 23


////////////////////////////////
// Lecture: Scoping

/*
Scope: the space/environment in which the variables are accessible
Lexical Scoping: a function that is lexically with in another function get access
to the scope of the outter function
The scope chain order in which functions are written lexically
*/

var a = "Hello!"
first();

function first() {
  var b = 'Hi!';
  second();

  function second() {
    var c = 'Hey!';
    console.log(a + b + c); // a = global variable always have access inside function
    third()
  }
}

function third() {
  var d = 'john';
  console.log(c); // just because third() was invoked inside second() doesnt mean it has access
  // on whats inside the second() function this is and Error! c is not defined since is on a different
  // scope from the second() option
}
