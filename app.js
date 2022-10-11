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
var height = 23

if (height == '23') {
  //JS does type coercion
  console.log('true')
} else {
  console.log('false')
}

if (height === '23') {
  //JS does type coercion
  console.log('true')
} else {
  console.log('false')
}
