// LECTURE: Values and Variables

/*

let js = "amazing";
// if (js === "amazing") alert("Javascript is FUN!");

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// declaring variable - store variable in computers memory
let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher;";
// ^ Not good practice

// variable is a box where we can store a value

console.log(myFirstJob);

// LECTURE: Values and Variables
let country = "Canada";
let continent = "North America";
let population = 38000000;

console.log(country);
console.log(continent);
console.log(population);


*/
// ********************************************************************
// LECTURE: Data Types

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
// bug gives object but should be null

// LECTURE: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

*/
// ********************************************************************
// LECTURE: let, const and var

/*
let age = 30;
age = 31;
// changing variables also called mutating variable

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

// LECTURE: let, const and var
const language = "English";
*/
// ********************************************************************
// LECTURE: Basic Operators

/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 meanse 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; //
x--; //
console.log(x);

// Comparion operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// LECTURE: Basic Operators
let country = "Canada";
let continent = "North America";
let population = 38000000 + 1;
const language = "English";

let halfPop = population / 2;
console.log(halfPop);

const finland = 6000000;
const avgPop = 33000000;

console.log(population >= finland);
console.log(population <= avgPop);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;

console.log(description);
*/

// ********************************************************************
// Operation Precedence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
// *********************************************************************

// Coding Challenge #1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// console.log(markBMI, johnBMI);
// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);
// *********************************************************************

// LECTURE: STRINGS AND TEMPLATE LITERALS
/*
const firstName = "Gogulan";
const job = "dev";
const birthYear = 1996;
const year = 2037;

const gogulan =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(gogulan);

const gogulanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(gogulanNew);

console.log(`just a regular string...`);

// multi-line string not using \n
console.log("string with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/
// *********************************************************************

// LECTURE TAKING DECISIONS IF/ELSE STATEMENTS

// const age = 15;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);
// *********************************************************************

// CODING CHALLENGE 2

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//   console.log(
//     `Mark's BMI (${markBMI.toFixed(
//       1
//     )}) is higher than John's (${johnBMI.toFixed(1)})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${johnBMI.toFixed(
//       1
//     )}) is higher than Mark's (${markBMI.toFixed(1)})!`
//   );
// }
// *********************************************************************

// LECTURE - TYPE CONVERSION AND COERCION

// const inputYear = "1991";
// console.log(inputYear + 18);
// display 199118

// // Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // console.log(Number("Jonas")); - NAN - Not a number (invalid number but still number type)
// console.log(typeof NaN);
// console.log(String(23), 23);

// // Type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3); // "-" turns everything to numbers "+" turns everything to strings
// console.log("23" * "2");

// let n = "1" + 1; // '11'
// n = n - 1;
// console.log(n);

// *********************************************************************

// LECTURE - TRUTHY AND FALSY VALUES

// 5 falsy values:0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Dont spend it all");
// } else {
//   console.log("you should get a job");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// *********************************************************************

// LECTURE - EQUALITY OPERATORS

// const age = "18";
// if (age === 18) console.log("you just became an adult (strict)");
// // strict equality operator vs loose '18' == 18 is true (does type coersion)
// if (age == 18) console.log("you just became an adult (loose)");

// const favourite = Number(prompt("whats your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log("cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is an cool number!");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");

// *********************************************************************

// LECTURE - LOGICAL OPERATORS

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("Someone else should drive");
// // }

// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }
// *********************************************************************

// CODING CHALLENGE 3

// const Dolphins = (96 + 108 + 89) / 3;
// const Koalas = (88 + 91 + 110) / 3;

// console.log(Dolphins, Koalas);
// if (Dolphins >= 100 || Koalas >= 100) {
//   if (Dolphins > Koalas) {
//     console.log("Dolphins is the winner");
//   } else if (Dolphins < Koalas) {
//     console.log("Koalas is the winner");
//   } else {
//     console.log("tie");
//   }
// } else {
//   console.log("No team wins. score is less than 100");
// }

// *********************************************************************

// LECTURE - THE SWITCH STATEMENT
// const day = "thursday";

// switch (day) {
//   case "monday": //day == 'monday'
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tueday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "firday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("not a valid day!");
// }

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "firday") {
//   console.log("record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("not a valid day!");
// }
// *********************************************************************

// LECTURE - STATEMENTS AND EXPRESSIONS
// expression
// 3 + 4;
// 1991;
// true && false && !false;
// // statements
// if (23 > 10) {
//   const str = "23 is bigger";
// }
// console.log(`im ${2037 - 1991} years old`);
// // template literal can only insert expressions - not statements - cant put in if statement

// *********************************************************************

// LECTURE - THE CONDITONAL (TERNARY) OPERATOR

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💦");

// const drink = age >= 18 ? "wine 🍷" : "water 💦";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💦";
// }

// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💦"}`);

// *********************************************************************

// CODING CHALLENGE 3
// bill = 275;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
// ${bill + tip}`);
