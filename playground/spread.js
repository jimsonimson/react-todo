// function add(a, b) {
//   return a + b;
// }
// 
// console.log(add(3, 1));
// 
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Corey'];
// var groupB = ['jimson'];
// var final = [3, ...groupA];
// 
// console.log(final)

//Spread operator practice
//1. create a greeting 

var person = ['jimson', 24];
var person2 = ['jen', 25];

function greet(name, age){
  console.log('Hi ' + name + ', you are ' + age)
}
greet(...person);
greet(...person2);

//2. Combine 2 arrays with spread

var names = ['mike', 'ben'];
var final = ['jimson', ...names];

final.forEach(function(name){
  console.log('Hi ' + name)
})
