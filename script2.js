

function getProducts(){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','products.json',true);
    xhr.send();
    // request is sent but data is not completely loaded yet
    let div=document.querySelector('.result');
    xhr.onprogress=function(){
        div.textContent='loading...';
    }
    xhr.onload=function(){
        // console.log(xhr.responseText);
        let products=JSON.parse(xhr.responseText);
        console.log(products);
        if (Array.isArray(products)) {
            products.forEach((element)=>{
                let html=`
                <div style="margin:20px;text-align:center;font-size:18px;">
                <div style="font-weight:bold;font-size:2rem;color:red"><p>${element.title}</p></div>
                <div><p>${element.type}</p></div>
                <div><p>${element.description}</p></div>
                <div><p>Price: ${element.price}</p></div>
                <div><p>Rating: ${element.rating}</p></div>
                </div>`;
                div.insertAdjacentHTML('beforeend',html);
            });
        }else{
            div.textContent='Failed to load products';
        }
}
}

// getProducts();

document.getElementById('btn').addEventListener('click',getProducts);