// running Js in different env <=
// variable declaration
// var
//const //let ?!

// for (let i = 0; i < 5; i++) {}
// console.log(i); // i is not defiend
// let i
// console.log(i);

// funcitons

// function add(a, b) {
//   return a + b;
// }
// => assign to variable
// const add = function(){}
// => pass function as a parameter
// const excuter = function(fn){fn()}
// excuter(function(){console.log("hello");})

// function add(a, b) {
//   return a + b;
// }
// const add = (a, b) => a + b // return a+b
// const add = (a, b) => {a + b} // return undefiend

// array funcitons
// const arr = [1, 2, 3, 4, 5];
//map
// const newArr = arr.map((el)=>{
//     return el*2
// })
// const newArr = arr.map((el)=>el*2)
// const newArr = arr.map((el)=>{el*2}) => return array of undefineds []
//filter
// arr.filter((el) => el % 2 === 0);
// const result = arr.filter((el) => {el % 2 === 0}); // []
// console.log(result);
//find
// arr.find((el) => el % 2 === 0);

// array and object destructuring
// const person = {
//   name: "Ahmed",
//   age: 32,
// };

// const name = person.name
// const age = person.age

// const { name } = person;
// const { age } = person;

// const { name,  age } = person;

// const { name: userName,  age: userAge } = person;
// const userName = person.name
// const userAge = person.age

// asynchronus Js

// console.log("first");

// setTimeout(()=>{
//     console.log("second");
// }, 1000)

// console.log("third");

// const getPosts = () => {
//     let posts;
//   setTimeout(() => {
//       console.log("coming back from database");
//     posts = [{ id: 1, body: "post body" }];
//   }, 1000);
//   return posts
// };

// const posts = getPosts();
// console.log(posts);

//callbacks

// const getPosts = (cbf) => {
//   setTimeout(() => {
//     cbf([{ id: 1, body: "post body" }])
//   }, 1000);
// };

// getPosts((posts)=>{
//     console.log(posts);
// })

// promises

// const getPosts = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res([{ id: 1, body: "post body" }]);
//     }, 1);
//   });
// };

// getPosts()
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch(() => {
//     console.log("error");
//   });

// console.log("firsts");
// (async () => {
//   const posts = await getPosts();
//   console.log(posts);
// })();
// console.log("second");

// npm
// => node package manger

// My code
    // axions
        // A 
            // x 
            // y 
                // s
        // B 
            // m
            // n