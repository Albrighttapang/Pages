// login/signup functionality
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    // handle login logic here
    console.log(`Login Email: ${email}, Password: ${password}`);
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    const phoneNumber = signupForm.querySelector('input[type="tel"]').value;
    // handle signup logic here
    console.log(`Signup Email: ${email}, Password: ${password}, Phone Number: ${phoneNumber}`);
});

// product data (this would typically come from a database or API)
const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'product3.jpg' },
];

// generate product HTML
const productsSection = document.querySelector('.products');

if (productsSection) {
    products.forEach((product) => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
        productsSection.innerHTML += productHTML;
    });
}