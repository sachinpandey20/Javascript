let score = "abc";
//console.log(typeof(score));
//console.log(typeof score);

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//  "33abc" String => NaN
// "33" number => 33
// true boolean => 1 false => 0
// undefined = > NaN

let isLoggedIn = "sachin"

let booleanIsLoggedIn = Boolean(isLoggedIn); 
//console.log(booleanIsLoggedIn);
//if empty/0 => false
//if string/1 => true


let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber))
//33(string)    

// ***************** Operations **************

let value = 3
let negValue = -value
//console.log(negValue);

//Basic Math Operations
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2%2);
//console.log(2**2);//2^2(power)

let str1 = "hello"
let str2 = " sachin"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


console.log(+true);
console.log(+"");

let num1, num2, num3 
num1 = num2 =num3 = 2+2

// link to study
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion