// console.log('Good Morning user!');
// setTimeout(function(){
//     console.log('hello world');
// },2000);
// console.log('Have a nice day');
// fetch('data.txt')
// .then(function(response){
//     console.log(response);
// });

console.log('Program starts here');
setTimeout(function(){
    console.log('set timeout callback executed');
},0);
Promise.resolve('Resolved promise data')
.then(function(response){
    console.log(response);
})
console.log('Program ends here');