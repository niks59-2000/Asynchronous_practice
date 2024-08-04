// 1.get current coordinates of user

/*
let getPosition=function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject)
    });
}
let displayUserCountry=async function(){
    try{
        let position=await getPosition();
        let{latitude:lat,longitude:lng}=position.coords;
        
       //2.get info related to current coordinates of user
        let geoResponse=await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=${lat}&lon= ${lng}&format=json&`)
        let geoData=await geoResponse.json();
        let countryResponse=await fetch('https://restcountries.com/v3.1/name/'+geoData.address.country);
        let countryData=await countryResponse.json();
        return `You are staying in ${geoData.address.state},${geoData.address.country}`;
    }catch(err){
        console.error(err.message);
        throw err;
    }
}
console.log('fetching user location');
displayUserCountry()
    .then(val=>console.log(val))
    .catch(err=>console.log(err.message))
    .finally(()=>console.log('User location rendered'));
*/

// in this program we are mixing aync & await and promise. to resolve this,


let getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

let displayUserCountry = async function() {
    try {
        let position = await getPosition();
        let { latitude: lat, longitude: lng } = position.coords;

        // Get info related to current coordinates of user
        let geoResponse = await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=${lat}&lon= ${lng}&format=json&`);
        let geoData = await geoResponse.json();

        // Assuming the response contains address.city and address.country properties
        let countryResponse = await fetch('https://restcountries.com/v3.1/name/' + geoData.address.country);
        let countryData = await countryResponse.json();

        return `You are staying in ${geoData.address.state}, ${geoData.address.country}`;
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

// (async function() {
//     try {
//         console.log('fetching users location');
//         let location = await displayUserCountry();
//         console.log(location);
//         console.log('user location rendered');
//     } catch (err) {
//         console.log(err.message);
//     }
// })();

const main = async function() {
    try {
        console.log('fetching users location');
        let location = await displayUserCountry();
        console.log(location);
        console.log('user location rendered');
    } catch (err) {
        console.log(err.message);
    }
}

// Call the main function
main();