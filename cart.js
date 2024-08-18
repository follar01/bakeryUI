document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('flex', 'justify-between', 'items-center');
            itemDiv.innerHTML = `
                <p class="text-[24px] font-medium">${item.name} - $<span class="item-price">${item.price}</span></p>
                <div class="flex items-center">
                    <button class="decrease-quantity bg-[#933C24] text-[#FFFFFF] px-[12px]">-</button>
                    <span class="item-quantity px-[12px]">${item.quantity}</span>
                    <button class="increase-quantity bg-[#933C24] text-[#FFFFFF] px-[12px]">+</button>
                    <button class="remove-item bg-red-600 border-none rounded-full text-[#FFFFFF] px-[12px] ml-4">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(itemDiv);

            // Decrease quantity
            itemDiv.querySelector('.decrease-quantity').addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart.splice(index, 1);
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
                updateCartSummary();
            });

            // Increase quantity
            itemDiv.querySelector('.increase-quantity').addEventListener('click', () => {
                item.quantity += 1;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
                updateCartSummary();
            });

            // Remove item
            itemDiv.querySelector('.remove-item').addEventListener('click', () => {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
                updateCartSummary();
            });
        });

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-[24px] font-medium">Your cart is empty.</p>';
        }

        // Update cart summary after rendering the cart
        updateCartSummary();
    }

    renderCart();
});

function updateCartSummary() {
    const cartItems = document.querySelectorAll('#cart-items .flex');
    let totalItems = 0;
    let totalPrice = 0;

    cartItems.forEach(item => {
        const priceElement = item.querySelector('.item-price');
        const quantityElement = item.querySelector('.item-quantity');

        if (priceElement && quantityElement) {
            const price = parseFloat(priceElement.textContent);
            const quantity = parseInt(quantityElement.textContent);

            console.log('Price:', price);  // Debugging line
            console.log('Quantity:', quantity);  // Debugging line

            totalItems += quantity;
            totalPrice += price * quantity;
        } else {
            console.log('Failed to find price or quantity element');  // Debugging line
        }
    });

    console.log('Total Items:', totalItems);  // Debugging line
    console.log('Total Price:', totalPrice);  // Debugging line

    document.querySelector('#total-items').textContent = totalItems;
    document.querySelector('#total-price').textContent = `$${totalPrice.toFixed(2)}`;
}
