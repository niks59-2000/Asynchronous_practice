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
// function getCountry(country){
//     let promise1=fetch('https://restcountries.com/v3.1/name/'+country);
//     let promise2=promise1.then(function(response){
//         console.log(response);
//         return response.json();
//         // json() also returns a promise
//     });
//     promise2.then(function(data){
//         console.log(data);
//         displayCountry(data[0]);
//     });
// }
getCountry('usa');
getCountry('germany');
getCountry('brazil');

// promise chaining


function getCountry(country){
    fetch('https://restcountries.com/v3.1/name/'+country)
    .then(function(response){
        console.log(response);
        return response.json()
    })
    .then(function(data){
        console.log(data);
        displayCountry(data[0]);
    })
    .catch(function(error){
        console.log(error);
    })
}
