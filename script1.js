// synchoronous code

let helloWorld=function(){
    console.log('Hello,World!');
}
let greetings=function(){
    console.log('Good Morning');
    helloWorld();
    console.log('Have a Good day!!');
} 
greetings();


/*
let str='Good Evening';
console.log(str);
alert('This is an alert window!');
console.log('Have a great day!');
*/

// Asynchoronous code
console.log('\n');
let str='Good Morning';
console.log(str);
setTimeout(function(){
    alert('This is a alert window!');
    console.log('alert window displayed');
},5000);
console.log('Have a great day');

