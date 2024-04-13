const menuData = {
    appetizers: [
        { name: 'Bruschetta', price: 8.99 },
        { name: 'Caesar Salad', price: 10.99 },
        { name: 'Garlic Shrimp', price: 12.99 }
    ],
    'main-course': [
        { name: 'Grilled Chicken', price: 15.99 },
        { name: 'Pasta Carbonara', price: 14.99 },
        { name: 'Ribeye Steak', price: 24.99 }
    ],
    desserts: [
        { name: 'Tiramisu', price: 7.99 },
        { name: 'Cheesecake', price: 6.99 },
        { name: 'Chocolate Fondant', price: 8.99 }
    ]
};

let currentCategory = 'appetizers';
const menuElement = document.getElementById('menu');
const cartElement = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

function displayMenu(category) {
    menuElement.innerHTML = '';
    menuData[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.textContent = `${item.name} - $${item.price}`;
        menuItem.onclick = () => addToCart(item);
        menuElement.appendChild(menuItem);
    });
}

function addToCart(item) {
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.textContent = `${item.name} - $${item.price}`;
    cartElement.appendChild(cartItem);

    const totalPrice = parseFloat(totalElement.textContent) + item.price;
    totalElement.textContent = totalPrice.toFixed(2);
}

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.category-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        displayMenu(currentCategory);
    });
});

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert(`Total: $${totalElement.textContent}\nThank you for your order!`);
});
