/*
Lecture: variables
var name = 'Vanessa';
console.log(name);
var lastName = 'Alvarez';
var age = 28;
console.log(name + " " + lastName + " is " + age + " years old");

var fullAge = true;
console.log(fullAge);
*/

//////////////////////////////////////////


/*
Lecture: varibales 2

// blue outputs of numbers are numbers if is black is a string

var age = 28;
console.log(age + age);

var job, isMarried;

job = 'developer';
isMarried = false;

job = "teacher";
console.log(job + " " + isMarried);
*/

//////////////////////////////////////////


/*
Lecture: Operators


var currentYear = 2016;
var birthYear = currentYear - 28;
birthYear = currentYear - 26 * 2;
console.log(birthYear);


var ageJhon = 30;
var ageMark = 30;

ageJhon = ageMark = (3 + 5) * 4 - 6;
ageJhon++; //age of john should be 27 is adding 1 more year
ageJhon = ageJhon + 1;

ageMark *= 2 // takes the age of mark and multiplies by 2

console.log(ageJhon);
console.log(ageMark);

*/

//////////////////////////////////////////


/*
Lecture: If/Else statements

var name = 'Vanessa';
var age = 26;
var isMarried = 'no';


if(isMarried === 'yes') {
  console.log(name + ' is married');
} else {
  console.log(name + ' will hopefully marry soon');
}

isMarried = false;

if(!isMarried) {
  console.log('hopefully would marry soon');
} else {
  console.log('yes is married')
}
*/

//////////////////////////////////////////


/*
Lecture: Boolean logic and switch statements

var age = 20;

if(age <  20) {
  console.log('John is a teenager');
} else if(age >= 20 && age < 30) {
  console.log('john is a young man');
} else {
  console.log('John is a man');
}

var job = 'teacher';
// job = prompt('what does john do?');
switch (job) {
  case 'teacher':
      console.log('John teaches kids');
    break;
  case 'driver':
      console.log('John drives a cab in lisbon');
    break;
  case 'cop':
      console.log('John helps fight crime');
    break;
  default:
      console.log('John does something else');
}

//////////////////////////////////////////

// Code Challenge
//
// var ageMark = 20;
// var ageSteve = 30;
// var heightMark = 50;
// var heightSteve = 140;
//
// var multMarkAge = ageMark * 5;
// var drawMark = multMarkAge + heightMark;
//
// var multSteveAge = ageSteve * 5;
// var drawSteve = multSteveAge + heightSteve;
//
// if(drawMark > drawSteve) {
//   console.log('mark wins with' + drawMark);
// } else {
//   console.log('steve wins with' + drawSteve);
// }
*/


/*
Lecture: Functions
*/

function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990); // calculateAge we call run and excute the function with argument 1990
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMary);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if(retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years');
  } else {
    console.log(name + ' already retired');
  }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);

/*
Lecture: Functions Statements and Expressions
*/

function someFun(par) { //This is a function statement performs an action
  //code
}

var someFun = function(par) { // This is a function Expression produces an outcome, a value
  //code
}

/*
Lecture:Arrays


var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
//Overwrite the Array
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // add element at the end of the array
console.log(john);

john.unshift('Mr.') // add element at the begining of the Array
console.log(john);

john.pop(); // remove from the last element of the array
console.log(john);

john.shift(); //remove from the begining
console.log(john);

console.log(john.indexOf('Smith')); //returns the position of the element that we pass into it

if(john.indexOf('designer') === -1) { // we are checking if he is not a teacher
  console.log('John is Not a designer');
}
*/

/*
Lecture: Objects
*/

var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  married: false
}
console.log(john.lastName);
console.log(john['lastName']);

john.lastName = 'Miller';
john['job'] = 'Programmer';
console.log(john);

//  This is the second way to create an Object
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Pike';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane);
