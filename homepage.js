document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            // alert(`${name} has been added to the cart!`);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the search input and button
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    // Get all product containers
    const products = document.querySelectorAll('section .flex > div');

    // Add event listener to the search button
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase(); // Get the search query

        products.forEach(function(product) {
            const productName = product.querySelector('p').textContent.toLowerCase(); // Get product name

            // Check if the product name includes the search query
            if (productName.includes(query)) {
                product.style.display = 'block'; // Show matching products
            } else {
                product.style.display = 'none'; // Hide non-matching products
            }
        });
    });

    // Optional: Add "Enter" key functionality for the search
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
