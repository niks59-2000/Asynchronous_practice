// Gelocation gets the current coordinates of the user
// Geolocation is callback based

// navigator.geolocation.getCurrentPosition(
//     position=>console.log(position),
//     err=>console.log(err)
// );

// promisfying geolocation API

// let getPosition=function(){
//     return new Promise(function(resolve,reject){
//         navigator.geolocation.getCurrentPosition(
//             position=>console.log(position),
//             err=>console.log(err)
//         );
//     });
// }
// console.log(getPosition());

// instead of this

// let getPosition=function(){
//     return new Promise(function(resolve,reject){
//         navigator.geolocation.getCurrentPosition(resolve,reject);
//     });
// }
// getPosition()
// .then(pos=>console.log(pos))
// .catch(err=>console.log(err.message));


//1. get current coordinates of user
// 2.get the country in which user is currently staying
let getPosition=function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject)
        });
}
getPosition()
.then(pos=>{
    let{latitude:lat,longitude:lng}=pos.coords;
    console.log(lat,lng);
    // return fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=12.983669953965913&lon= 77.74820937043926&format=json&`)
    return fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=${lat}&lon= ${lng}&format=json&`)
})
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    return fetch('https://restcountries.com/v3.1/name/'+data.address.country);
})
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    displayCountry(data[0]);
})
.catch(err=>console.error(err.message));


// 3.display information related to that country in webapge
let country=document.querySelector('.country');

function displayCountry(data){
    let html=`
        <article style="margin:50px" class="list">
        <img src="${data.flags.png}">
        <div>
        <h3>${data.name.common}</h3>
        <h4>${data.region}</h4>
        <p>${((data.population)/100000).toFixed(2)}</p>
        <p>${Object.values(data.languages)}</p>
        <p>${Object.values(data.currencies).map(currency =>currency.name).join(', ')}</p>
        </div>
        </article>`
        country.insertAdjacentHTML('beforeend',html);
}
