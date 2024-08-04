// let getCountryInfo=async function(){
//     let response=await fetch('https://restcountries.com/v3.1/name/usa');
//     let data=await response.json();
//     console.log(response);
//     console.log(data);
// }
// // getCountryInfo();
// console.log('main thread executing');
// console.log(getCountryInfo());


// 1.get current coordinates of user

let getPosition=function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject)
    });
}
let displayUserCountry=async function(){
    let position=await getPosition();
    let{latitude:lat,longitude:lng}=position.coords;

//2.get info related to current coordinates of user

    let geoResponse=await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=${lat}&lon= ${lng}&format=json&`)
    let geoData=await geoResponse.json();
    let countryResponse=await fetch('https://restcountries.com/v3.1/name/'+geoData.address.country);
    let countryData=await countryResponse.json();
    displayCountry(countryData[0]);
    console.log(countryData[0]);

}
displayUserCountry();

// 3.get information related to that country
// 4.display it in webpage

let country=document.querySelector('.country');

function displayCountry(countryData){
    let html=`
        <article style="margin:50px" class="list">
        <img src="${countryData.flags.png}">
        <div>
        <h3>${countryData.name.common}</h3>
        <h4>${countryData.region}</h4>
        <p>${((countryData.population)/100000).toFixed(2)}</p>
        <p>${Object.values(countryData.languages)}</p>
        <p>${Object.values(countryData.currencies).map(currency =>currency.name).join(', ')}</p>
        </div>
        </article>`
        country.insertAdjacentHTML('beforeend',html);
}
