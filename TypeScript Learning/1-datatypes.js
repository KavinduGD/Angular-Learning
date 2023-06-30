"use strict";
//typeScript auto determine the types by looking at the value
//The TypeScript compiler infers the type information when there is no explicit information available in the form of type annotations
//string
let name1;
name1 = "Kavidu";
let name2 = name1.toUpperCase();
//console.log(name1, name2);
//number
let age;
age = 20.5;
age = 45;
//console.log(age);
//string ---> number
let dob = "2005";
let reuslt = parseInt(dob);
//console.log(reuslt);
//boolean
let isvalid = true;
//console.log(isvalid);
//array
let empList1 = ["Kavindu1", "Gihan1"];
let empList2;
empList2 = ["Kavindu2", "Gihan2"];
//console.log(empList1, empList2);
let marks;
marks = [3, 45, 656, 54];
//console.log(marks);
//array  methods
//filter =  iterates over each element of the array and returns a new array containing only the elements for which the condition is true.(return is mendatory)
let filterMarks = marks.filter((num) => num > 100);
//console.log(filterMarks);
//map =   iterates over the array, executes the provided function on each element, and returns a new array with the transformed values.(return is mendatory)
let mapMarks = marks.map((mark) => mark * 2);
//console.log(mapMarks);
//find = returns the first element in the provided array that satisfies the provided testing function
let mark = marks.find((mark) => mark > 50);
//console.log(mark);
//reduce= used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator.
// Note
// At the first callback, there is no return value from the previous callback.
// Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
// If an initial value is supplied, this is used, and the iteration starts from array element 0.
let total = marks.reduce((acc, num) => acc + num);
//console.log(total);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c;
c = Color.Blue;
let c1;
c1 = 3 /* Color1.Blue */;
//console.log(c1);
//tuple=A tuple is a typed array with a pre-defined length and types for each index.
function swapNumbers(num1, num2) {
    return [num2, num1];
}
let tuple;
tuple = swapNumbers(10, 30);
// console.log(tuple[0]);
// console.log(tuple[1]);
//any=used when we deal with third-party programs and expect any variable but we don't know the exact type of variable.
let temp;
temp = "Kavindu";
temp = 10;
temp = true;
// console.log(true);
let anyArray;
anyArray = ["Kavindu", 100, "Gihan", 90];
// console.log(anyArray);
