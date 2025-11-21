import renderCart from './renderCart';
import postData from './postData';

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');
    const cartTotal = cartModal.querySelector('.cart-total > span');
    const cartSendBtn = cartModal.querySelector('.cart-confirm');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartCounter = document.querySelector('.counter');
    const goodsWrapper = document.querySelector('.goods');

    let cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : [];
    cartCounter.textContent = cart.length;

    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex';

        renderCart(cart);
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price;
        }, 0);
    });

    cartCloseBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    cartWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const card = e.target.closest('.card');
            const goodItemIndex = cart.findIndex((item) => item.id === card.dataset.key);
            cart.splice(goodItemIndex, 1);
            cartCounter.textContent = cart.length;
            localStorage.setItem('cart', JSON.stringify(cart));

            renderCart(cart);
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price;
            }, 0);
        };
    });

    cartSendBtn.addEventListener('click', (e) => {
        postData(cart);

        cart = [];
        cartCounter.textContent = 0;
        localStorage.removeItem('cart');

        renderCart([]);
        cartTotal.textContent = 0;
    });

    goodsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const card = e.target.closest('.card');
            const goods = JSON.parse(localStorage.getItem('goods'));
            const goodItem = goods.find((item) => item.id === card.dataset.key);

            cart.push(goodItem);
            cartCounter.textContent = cart.length;
            localStorage.setItem('cart', JSON.stringify(cart));
        };
    });
};

export default cart;