function addToCart(pid) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];   
    const product = products.find(product => product.id == pid);
    console.log(product);

    if (product) {
        // Get the quantity value from the input field
        var inputQuantity = parseInt(document.getElementById('qty').value);
        console.log("Quantity: " + inputQuantity);

        // Check if the product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if(inputQuantity == 0){
            alert("Please add the quantity before proceeding!");
        }
        else if (existingProductIndex !== -1) {
            // If product already exists in the cart, update the quantity
            // cart[existingProductIndex].quantity = inputQuantity;
            alert("This item is already in your cart.");
        } else {
            const productWithQuantity = { ...product, quantity: inputQuantity };
            cart.push(productWithQuantity);

            localStorage.setItem('cart', JSON.stringify(cart));
            alert("Your item has been successfully added to the cart.");
        }       
    } else {
        console.error('Product not found!');
    }
}


