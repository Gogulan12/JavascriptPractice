// *******************************************************************
// LECTURE: ACTIVIATING STRICT MODE

// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // const interface = "Audio";
// // const private = 534;

// // const if = 23;

// *******************************************************************
// LECTURE: FUNCTIONS

// function logger() {
//   console.log("my name is gogulan");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// *******************************************************************
// LECTURE: FUNCTION DECLARATION vs. EXPRESSIONS

// // // Function declaration - can call them before they are defined -process called hoisting

// const age1 = calcAge1(1991);

// function calcAge1(birthYeah) {
//   // const age = 2037 - birthYeah;
//   return 2037 - birthYeah;
// }

// // const age1 = calcAge1(1991);
// // console.log(age1);

// // Fuction Expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// *******************************************************************
// LECTURE: ARROW FUNCTIONS

// // // Fuction Expression
// // const calcAge2 = function (birthYeah) {
// //   return 2037 - birthYeah;
// // };

// // Arrow function
// const calcAge3 = (birthYeah) => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "gogulan"));
// console.log(yearsUntilRetirement(1991, "bob"));

// *******************************************************************
// LECTURE: FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// *******************************************************************
// LECTURE: REVIEWING FUNCTIONS

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "gogulan"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// *******************************************************************
// CODING CHALLENGE #1

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// dolphinsAvg = calcAverage(85, 54, 41);
// koalasAvg = calcAverage(23, 34, 27);

// console.log(dolphinsAvg, koalasAvg);

// checkWinner = function (dolphinsAvg, koalasAvg) {
//   if (dolphinsAvg >= koalasAvg * 2) {
//     console.log(`Dolphins win (${dolphinsAvg} vs. ${koalasAvg})`);
//   } else if (koalasAvg >= dolphinsAvg * 2) {
//     console.log(`Koalas win (${koalasAvg} vs. ${dolphinsAvg})`);
//   } else {
//     console.log(`no winner`);
//   }
// };

// checkWinner(dolphinsAvg, koalasAvg);

// *******************************************************************
// LECTURE: INTRODUCTION TO ARRAYS

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["Bob", "Alice"];

// const firstName = "Jonas";
// const jonas = [firstName, "schmed", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// // console.log(calcAge(years));
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// *******************************************************************
// LECTURE: BASIC ARRAY OPERATIONS (METHODS)

// const friends = ["michael", "Steven", "Peter"];

// // Add elements
// const newLength = friends.push("jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// *******************************************************************
// CODING CHALLENGE #2

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// *******************************************************************
// LECTURE: INTRODUCTION TO OBJECTS

// const jonasArray = [
//   "Jonas",
//   "Schmed",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const jonas = {
//   firstName: "Jonas",
//   lastName: "schmed",
//   age: 2037 - 1991,
//   job: "teacher",
//   Friends: ["Michael", "Peter", "Steven"],
// };

//*******************************************************************
// LECTURE: DOT VS BRACKET NOTATION

// const jonas = {
//   firstName: "Jonas",
//   lastName: "schmed",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // console.log(jonas.'last' + nameKey) - would not work

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// // console.log(interestedIn);
// // // console.log(jonas.interestedIn) will give undefined because it is not a property of the jonas object
// // console.log(jonas[interestedIn]); // expression will get evaluated

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmed";
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

//*******************************************************************
// LECTURE: OBJECT METHODS

const jonas = {
  firstName: "Jonas",
  lastName: "schmed",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge is a property of the jonas object - any function that is attached to an object is called a method
  calcAge: function (birthYeah) {
    return 2037 - birthYeah;
  },

  // can not be a declaration - has to be an expressions
  // function(birthYeah) {
  //   return 2037 - birthYeah
  // }
};

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
