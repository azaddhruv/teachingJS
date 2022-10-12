// alert('i am a web developer')
// alert('i love teaching')

//ES5 -- ES6/ES2015 -- ES7/ES2016 -- ES8/ES2017

/* 
Data Types
1 Number
2 String
3 Boolean
4 Undefined
5 Null


JS have dynamic typing - data types are automatically assingned to variables

*/

// var a = 22 //number
// var b = 'SHRUPI' //string
// var c = true //boolean
// var d //undefined
// //Null
// // console.log(d, e)

//========================================================================================================

// var firstname = 'Mini Shruti'
// var age = 55

// console.log(firstname + ' ' + age)

// var job, isHot

// job = 'not a model'
// isHot = false

// console.log(
//   firstname + ' is ' + age + ' years old.' + job + ' and she is hot? ' + isHot
// )

// //variable mutation

// age = 'twenty one'
// job = 'chipadi'

// console.log(
//   firstname + ' is ' + age + ' years old.' + job + ' and she is hot? ' + isHot
// )

//typeof operator
// var a = 22,
//   b = 'ssfsfsf',
//   c = false

// console.log(typeof a, typeof b, typeof c)

//if else

// var name = 'panpan'
// var isCute = true

// if (isCute === true) {
//   console.log(name + ' is cute')
// } else {
//   console.log(name + ' is not cute')
// }

//switch case

// var job = 'teacher'

// switch (job) {
//   case 'teacher':
//     console.log('go teach')
//     break

//   case 'doctor':
//     console.log('go do operarion')
//     break

//   default:
//     console.log('find a job')
//     break
// }

//Truth and Falsy Values
//falsy values = undefined, null, 0, '' , NaN
//truthy values = not falsy values

//Equality Operaotrs
// var height = 23

// if (height == '23') {
//   //JS does type coercion
//   console.log('true')
// } else {
//   console.log('false')
// }

// if (height === '23') {
//   //JS does type coercion
//   console.log('true')
// } else {
//   console.log('false')
// }

//====================================================
//function
//====================================================

// function functionName(parameters){
//  logic || statement
// }

// var miniShrutiAge = 20

// function calcBirthYear(age) {
//   return 2022 - age
// }

// var birthYear = calcBirthYear(miniShrutiAge)
// // var birthYear = 2002

// console.log(birthYear)

//function declaration
// function whatDoYoDo(job, firstname) {}

// // function expression
// function whatDoYoDo(job, firstname) {
//   console.log('hello ' + firstname + ' and you are a ' + job);
// }

// whatDoYoDo('teacher', 'Panda');

// var a = 100;
// a--;
// var b = a * a++;


//=========================================================================================
//Arrays
//=========================================================================================

// var names = ["Shruti", "Arya", "Mini Shruti"];
// var years = new Array('2002', '1970', '2022');

// console.log(names);
// console.log(years);

//Arrays can contain multiple data types

// var nameAndYears = ["Shruti", 2002, 'Arya', false, 2.222];
// // console.log(nameAndYears);

// // console.log(nameAndYears[0]);
// // console.log(nameAndYears[4]);

// // nameAndYears[4] = 22.22;
// console.log(nameAndYears);

// //Array operations
// nameAndYears.pop();

// console.log(nameAndYears);

// nameAndYears.push('dodo');

// console.log(nameAndYears);

// nameAndYears.shift();

// console.log(nameAndYears);

// nameAndYears.unshift("Dhruv");

// console.log(nameAndYears);


// var arr = [[1, 2, 'k'], 45, [1, 2, [4, 6, 7]]];

// console.log(arr);

// //indexOf
// var names = ["panpan", "shruti", "mini shruti", "abuzar"];
// console.log(names.indexOf("shruti"));



//=========================================================================================================
//Objet and Properties
//=========================================================================================================

// var profile = {
//   name: "Shruti",
//   age: 20,
//   isMarried: false,
//   family: ['Radha', 'Narender', 'Rinku', 'Bade Papa'],
//   job: 'student',
//   skills: {
//     technical: ['python', 'django', 'c', 'sql'],
//     hobbies: ['singing', 'dancing']
//   }
// };

// console.log(profile.name);
// console.log(profile["age"]);

// console.log(profile.skills.technical);
// console.log(profile.skills.hobbies[0]);

// //mutation
// profile.skills.hobbies[0] = 'book reading';

// console.log(profile);

// profile.lastName = "Panchal";

// console.log(profile);

// var obj = new Object();
// obj.name = 'mini shruti';
// obj.age = '20';

// obj.skills = ['dancing', 'singing'];
// console.log(obj);



