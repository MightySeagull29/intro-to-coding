let cl = console.log;
let three = 99;
cl("Does 3 = 99?");
cl(three === 99);
if (three == 99) {
  console.log("ERROR");
} else {
  console.log("HAPPY");
}

// for (let count = -10; count < 25 < 25; count++) {
//     cl(count);
// }
// cl("I can COUNT, but not MATH");

// let count = 7;
// let branches = "#";
// for (let treecount = 0; treecount < 9; treecount++) {
//   console.log(" ".repeat(count + 1) + branches);
//   branches = "#" + branches + "#";
//   count = count - 1;
//   if (count === -1) {
//   }
// }
// console.log("#");
// console.log("        #");
// let myName = "Ethan";
// for (let index = 0; index < myName.length; index++) {
//   const letter = array[index];
//   console.log(letter)
// }
// let fun = function(){
//   console.log("Fuction says");
// };
// for (let index = 0; index <0 ; index++) {
//  fun();
// }

// let getGreeting = function() {
//   return "Hello From a Function"
// }
// // let greeting = getGreeting();
// console.log(greeting);

// let greet = function(name) {
//   return "Hello" + name;
// }
// let greeting = greet(" Mr. Nathan")
// console.log(greeting)

// for (let index = 1; index < 101 ; index++) {

//  if (index %3 ===0 && index %5 === 0) {
//  console.log("FIZZBUZZ")
// }
//   else if  (index %3 === 0) {
//   console.log("FIZZ")
// }
//   else if (index %5 === 0) {
//     console.log("BUZZ")
//   }
//   else {console.log(index)
//   }
// }

// let add = function(num1, num2) {
//   return num1 + num2;
// }
// let subtract = function(num1, num2) {
//   return num1 - num2;
// }
// let multiply = function(num1, num2) {
//   return num1 * num2;
// }
// let divide  = function(num1, num2) {
//   return num1 / num2;
// }
// let ComplexEquation = function(num1, num2, num3) {
//   return num3 - num2 / num1 * (num3 * num2) - num1;
// }

// cl(add(3,101));
// cl(subtract(3,101))
// cl(multiply(101,3))
// cl(divide(1,80.5))
// cl(ComplexEquation(1,1,1))

// let a = [1,2,3];
// let b = ["x", "y", "z"]
// let c = [a,b]
// cl(a,b,c)

// let a = [1,2,3];
// a.push(4);
// a.push(5);
// // a.pop();
// cl(a)

// let a =["Array", "says", "hi"];

// cl(a.length)]

// let a = [1,2,3,4]
// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   cl(element)
// }
// let o = {};

// o.name = "three";
// o.age = three;

// console.table(o);

// let o = {};
// o.name = "Nathan";
// let key = "name";
// cl(o[key]);

// cl(Math.floor(Math.random()* 7))

// let d = new Date();
// d.

// let d = new Date();
// cl(d)

// cl(Math.round(Math.random()*1000));

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22]
// let randomNumber = Math.round(Math.random()*21);
// cl(array[randomNumber])

// let array = [];
// let arraysum = Sum.array;
// for (let index = 0; index < 10001; index++) {
//   array.push(index);
// }
// cl(arraysum)

// function sumArray(array) {
//   const MyArray = [];
//   let sum = 0;

//   for (let i = 0; i < MyArray.length; i += 1) {
//     sum += MyArray[i];
//   }

//   return sum;
// }
// for (let index = 0; index < 10001; index++) {
//   MyArray.push(index)

// }

// console.log(sumArray([Array]));

// let RandomRPS = function() {
//   let rps = ["rock", "paper", "scissors"]
//   let choice = Math.floor(Math.random() * rps.length)
//   return rps[choice];
// }
// //cl(RandomRPS());

// cl(process.argv);
// let choose = process.argv[2];

// let UserInput = function(){
//   let Urps = ["rock", "paper", "scissors"]
//   return Urps[choose];}
// //cl(UserInput());

// let win = function(user, computer) {
// if(user ===computer) {
//   return "tie";
// } else if ( user === "rock"  && computer === "scissors"||
// user === "paper" && computer === "rock"||
//  user === "scissors" && computer === "paper")
//  {    return "user"
//     } else {
//       return "computer";
//     }
// }
// let congratulations = function(winner) {
//   if (winner === "tie") {
//     cl("nobody Wins");
//   }else if (winner === "computer") {
//     cl("Congratulations computer. Does that make you a lUser?")
//   } else if (winner === "user") {
//     cl("Congratulations User!")
//   }

// }

// let userInput = choose;
// let computerInput = RandomRPS();
// cl("User chooses:", userInput);
// cl("Computer chooses:", computerInput)
// let winner = win(userInput,computerInput,);
// congratulations(winner);

// class Card {
//   rank = 2;
//   suit = "Clubs";
//   name = "2";
//   color = "black";
// }
// let card = new Card();
// cl(card);
