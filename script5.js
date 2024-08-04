// let promise=new Promise(function(resolved,rejected){
//     console.log('Executer function executed');
//     // resolved('promise is resolved');
//     rejected('something went wrong');
// });
// console.log(promise);

// producing code
let promise=new Promise(function(resolved,rejected){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','data.txt',true);
    xhr.send();
    xhr.onload=function(){
        if(xhr.statusText==='OK'){
            resolved(xhr.responseText);
        }else{
            rejected('Sonething went wrong pls try again later');
        }
    }
});
// consuming code

promise.then(function(data){
    console.log(data);
});
// },function(error){
//     console.log(error)
// })
promise.catch(function(error){
    console.log(error);
})
console.log(promise);