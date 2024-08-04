// let x=10;
// const y='Hello world';
// y=100;
// console.log('Have a nice day');

// try{
//     let x=10;
//     const y=100;
//     y=100;
// }
// catch(err){
//     console.log('Error: '+err.message);
// }
// console.log('have a nice day');


// Error handling with async and await

// 1.async and await before handling error

/*
let getCountryInfo=async function(){
    let response=await fetch('https://restcountries.com/v3.1/name/usa');
    let data=await response.json();
    console.log(data);
}
*/

// 2.async and await with error handling

/*
let getCountryInfo=async function(){
    try{
        let response=await fetch('https://restcountries.com/v3.1/name/usa');
        let data=await response.json();
        console.log(data);
    }catch(err){
        console.log('Error occurred: '+err.message);
    }
}
    document.getElementById('btn').addEventListener('click',getCountryInfo);
*/


// instead of this

let getCountryInfo=async function(){
    let response=await fetch('https://restcountries.com/v3.1/name/usa');
    let data=await response.json();
    console.log(data);
}
document.getElementById('btn').addEventListener('click',function(){
    getCountryInfo()
    .catch(error=>console.log('Catch Error:'+error.message))
});