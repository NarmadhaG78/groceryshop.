document.addEventListener("DOMContentLoaded", function () {
    
    // Handle contact form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields before submitting.");
                return;
            }

            alert("Message sent successfully!");
            contactForm.reset();
        });
    }

    // Cart functionality
    const cart = [];
    const cartContainer = document.getElementById("cartContainer");

    function addToCart(productName, price) {
        cart.push({ productName, price });
        updateCartUI();
    }

    function updateCartUI() {
        if (cartContainer) {
            cartContainer.innerHTML = ""; // Clear the cart container
            if (cart.length === 0) {
                cartContainer.innerHTML = "<p>No items in cart yet!</p>";
            } else {
                cart.forEach((item, index) => {
                    const cartItem = document.createElement("div");
                    cartItem.innerHTML = `${item.productName} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
                    cartContainer.appendChild(cartItem);
                });
            }
        }
    }

    window.addToCart = addToCart;
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    // Attach event listeners to product buttons
    const productButtons = document.querySelectorAll(".add-to-cart");
    productButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.getAttribute("data-name");
            const productPrice = this.getAttribute("data-price");
            addToCart(productName, productPrice);
        });
    });

});
