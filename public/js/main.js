//Global
var products = [];
var cartItems = [];
var cart_n = document.getElementById('cart_n');
//DIVS
var fruitDIV = document.getElementById("fruitDIV")
var juiceDIV = document.getElementById("juiceDIV");
var saladDIV = document.getElementById("saladDIV");

//INFORMATION
var FRUIT = [
    {name:'Asus',price:1500},
    {name:'MSI',price:1250},
    {name:'Alienware',price:1340},
    {name:'Lenovo',price:1489},
    {name:'Asus',price:1354},
    {name:'Acer',price:1479}
];

var JUICE =[
    {name: 'Nvidia 1660 ti',price:250},
    {name: 'Nvidia RTX 2060',price:300},
    {name: 'Nvidia RTX 3080',price:475}
];

var SALAD=[
    {name: 'Intel I9',price:500},
    {name: 'Amd Ryzen 7 3700X',price:490},
    {name: 'Intel I7 10Gen',price:500}
];

function HTMLfruitProduct(con){
    let URL = `../img/fruits/fruit${con}.jpeg`;
    let btn = `btnFruit${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style = "height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <p class="card-text">${FRUIT[con-1].name}</p>
                    <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${FRUIT[con-1].name}',
                            '${FRUIT[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">
                            <a style="color:inherit;" href="/cart">Comprar</a></button> 
                            <button id="${btn}" type="button" onclick="cart('${FRUIT[con-1].name}','${FRUIT[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"> Añadir al carro </button>
                        </div>
                        <small class="text-muted">Envio Gratis</small>
                    </div>
                </div>
            </div>
        </div>
    
    `
}

function HTMLjuiceProduct(con){
    let URL = `../img/juice/juice${con}.jpeg`;
    let btn = `btnJuice${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style = "height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <p class="card-text">${JUICE[con-1].name}</p>
                    <p class="card-text">Price: ${JUICE[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${JUICE[con-1].name}',
                            '${JUICE[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">
                            <a href="/cart" style="color:inherit;">Comprar</a></button> 
                            <button id="${btn}" type="button" onclick="cart('${JUICE[con-1].name}','${JUICE[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"> Añadir al carro </button>
                        </div>
                        <small class="text-muted">Envio Gratis</small>
                    </div>
                </div>
            </div>
        </div>
    
    `
}

function HTMLsaladProduct(con){
    let URL = `../img/salads/salad${con}.jpeg`;
    let btn = `btnSalad${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style = "height:16rem;" src="${URL}" alt="Card image cap">
                <div class="card-body">
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <i style="color:orange;" class = "fa fa-star" > </i>
                    <p class="card-text">${SALAD[con-1].name}</p>
                    <p class="card-text">Price: ${SALAD[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" onclick="cart2('${SALAD[con-1].name}',
                            '${SALAD[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary">
                            <a href="/cart" style="color:inherit;">Comprar</a></button> 
                            <button id="${btn}" type="button" onclick="cart('${SALAD[con-1].name}','${SALAD[con-1].price}','${URL}','${con}','${btn}')"
                            class="btn btn-sm btn-outline-secondary"> Añadir al carro </button>
                        </div>
                        <small class="text-muted">Envio Gratis</small>
                    </div>
                </div>
            </div>
        </div>
    
    `
}

//ANIMATION
function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1000
    });
    toast({
        type:'success',
        title:'Añadido a tu carro de compras'
    });
}
//cart functions
function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage ==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));

        
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
        
    }

    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}

function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage == null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));

        
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products =JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = `[${products.length}]`;
    document.getElementById(btncart).style.display="none";


}


(()=>{
    for(let index=1;index<=6;index++){
        fruitDIV.innerHTML+=`${HTMLfruitProduct(index)}`;
    }
    for(let index=1;index<=3; index++){
        juiceDIV.innerHTML+=`${HTMLjuiceProduct(index)}`;
        saladDIV.innerHTML+=`${HTMLsaladProduct(index)}`;

    }
    if(localStorage.getItem("cart")==null){

    } else{
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}]`;
    }
})();

