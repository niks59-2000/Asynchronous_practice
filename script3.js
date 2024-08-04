"to display list of countryNames"
let country=document.querySelector('.country');

function getCountry(countryName){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/name/'+countryName,true);
    xhr.send();
    xhr.addEventListener('load',function(){
        // console.log(xhr.responseText);
        let [data]=JSON.parse(xhr.responseText);
        console.log(data);
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
    });
}
getCountry('brazil');
getCountry('germany');
getCountry('usa');
