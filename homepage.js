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

// Get elements
var hamburgerButton = document.getElementById('hamburgerButton');
var navLinks = document.getElementById('navLinks');
var overlay = document.getElementById('overlay');
var pageContent = document.getElementById('pageContent');

// Debugging: Check if button is clicked
hamburgerButton.addEventListener('click', function () {
    console.log('Hamburger button clicked'); // Check if this logs in the console

    if (navLinks.classList.contains('active')) {
        // Hide menu and remove blur
        navLinks.classList.remove('active');
        overlay.classList.add('hidden');
        pageContent.classList.remove('blur');
    } else {
        // Show menu and apply blur
        navLinks.classList.add('active');
        overlay.classList.remove('hidden');
        pageContent.classList.add('blur');
    }
});

// Close the menu if overlay is clicked
overlay.addEventListener('click', function () {
    navLinks.classList.remove('active');
    overlay.classList.add('hidden');
    pageContent.classList.remove('blur');
});
