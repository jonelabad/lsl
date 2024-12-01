function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
const pid = getQueryParam('pid');
var productData = products.filter(product => product.id== pid);
console.log(productData);


var container = document.getElementById('product-preview');
    container.innerHTML += `
            <div class="left-sec">
            <img src="images/Fashion/${productData[0].image}" alt="">
        </div>
        <div id="right-sec">
            <p class="brand">${productData[0].name}</p>
            <p class="name">${productData[0].name}</p>
            <p class="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eveniet ipsa quis atque neque repellat?Cupiditate facere, voluptatum quibusdam magni eaque voluptates quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo omnis veritatis cumque velit, dolorum praesentium </p>
            <p class="price">₹ ${productData[0].price}    
            ${productData[0].catId == 1 ? 
                `<span style="font-size: 17px;color: gray;font-weight: 400;">per 1Kg</span>` : ""}
            </p>
            ${productData[0].Id==3 ? 
                `<div class="size">
                <span>size : </span>
                <button>XS</button>
                <button>S</button>
                <button>L</button>
                <button>XL</button>
                <button>XLL</button>
            </div>` : ""}
            <div style="margin-top: 40px;margin-left: 33px;"> 
            <div class="quantity">
                <button id="minusBtn" onclick="sub()">−</button>
                <input type="text" name="qty" id="qty" value="0">
                <button id="plusBtn" onclick="add()">+</button>
            </div>
            <button class="AddToCart" onclick="addToCart(${productData[0].id})">Add to Cart</button>
        </div>  
         </div>
    `;


var input = document.getElementById('qty');
function add(){
    input.value = parseInt(input.value) + 1;
}
function sub(){
    if(input.value > 0){
        input.value = parseInt(input.value) - 1;
    }
}