console.log("This is JavaScript");

//*****************Variables*********
//var
// DataType varName = value; Strongly Type Language

var age = 11;

//var - Global
if (true) {
  var name = "majharul";
}
console.log(name); //this will work, var global works

//let
/** 
if(true){
    let name1 = "majharul1"
}
console.log(name1); //error: name1 is not defined, 
//That means we only use it with his block, it is local variable
*/

//const
//Scope => Local
const a = 10;
console.log(a);
//GOOD PRACTISE TO USE **let***

//*************Data types*************** */

//Numbers
let num = 12;

//Strings
let firstName = "Majharul";
const lastName = "Islam";
console.log(firstName + lastName);

//booleans
let isLogin = false;

//Null
let isAddress = null;
// let isAddress: any(that means we insert any data into isAddress)

//Objects
let myInformation = {
  firstName: "Imti",
  lastName: "Hasan",
  city: "Dhaka",
  cell: "01241212121",
};
console.log(myInformation.cell);

//JS 1 => true | 0 => false
// JS true | false
//true => 1
// false => 0

let consider = false;

console.log(consider + 10);
//            0     + 10 = 10

let consider1 = true;
console.log(consider1 + 10);
//            0     + 10 = 11

// string '1' + '1' = string
// string + number = string
// string * number = number
console.log("11" * 10); //gives me 110

// Typeof operator
console.log(typeof 11); // number
console.log(typeof consider1); //boolean

// ************** Conditional Operator ***********

const age1 = 22;
if (age1 > 20) {
  console.log("gooo");
} else {
  console.log("no");
}

//ternary Operator
age1 >= 18 ? console.log("watches movies") : console.log("read more");

//switch case

//example01
const option = 1;
switch (option) {
  case 1: {
    console.log("valo nei");
  }
  break;
  case 2: {
    console.log("aktu valo")
  }
  break
  case 3: console.log("valoi achi");
  break
  default: console.log("Invalid options")
}

//example02
let a1 =20;
let a2 = 22;
let operator = "+"

switch(operator){
    case "-" : console.log(a1 - a2)
    break
    case "+" : console.log(a1+a2)
    break
    default: console.log("Wrong input")
}

//Logical Operators
//AND &&
// OR ||
//NOT !=

//Loops

//************* Functions ****************
function add(n,n1){
    return n+n1;
}
console.log(add(2,2)) //4

//spread operator
function addNumber01(...number){
    let ans = 0 ;
    for(let i=0; i<number.length; i++){
        ans = ans + number[i]
    }
    return ans
}

console.log(addNumber01(1,2,3,4,5,6,7,8,9))

// ************* Arrow Functions ****************

const sayHello = ()=>{
    console.log("hey")
}

const add = (a,b)=>{
    console.log(a+b)
}

const add3 = (a,bt)=> console.log(a+bt);



