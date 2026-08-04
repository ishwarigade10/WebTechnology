const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function(){

    window.location.href = "login.html";

});

let cartCount = 0;

const cartButton = document.getElementById("cart-btn");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(function(button){

    button.addEventListener("click", function(){

        cartCount++;

        cartButton.textContent = "Cart (" + cartCount + ")";

        alert("Product added to cart successfully!");

    });

});