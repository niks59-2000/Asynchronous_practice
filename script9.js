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

function displayError(message) {
    let html = `<p style="color: red;">${message}</p>`;
    country.insertAdjacentHTML('beforeend', html);
}

function checkResponse(response){
    if(!response.ok){
        throw new Error(`Country not found (${response.status})`);
    }
    return response;
}

function getCountry(){
    fetch('https://restcountries.com/v3.1/name/abc')
    .then(checkResponse)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
        fetch('https://restcountries.com/v3.1/name/germany');
    })
    .then(checkResponse)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
        fetch('https://restcountries.com/v3.1/name/xx');
    })
    .then(checkResponse)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
    })
    .catch(function(error){
        displayError((`Error: ${error.message}`));
        console.error(`Error:${error.message}`);
    }) 
}
document.getElementById('btn').addEventListener('click',getCountry);