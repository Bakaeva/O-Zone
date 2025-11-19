import getData from './getData';
import renderGoods from './renderGoods';
import { categoryFilter } from './filters';

const filterByCategory = () => {
    const catalogBtn = document.querySelector('.catalog-button > button');
    const categoriesMenu = document.querySelector('.catalog');
    const categories = document.querySelectorAll('.catalog li');
    let isOpen = false;

    catalogBtn.addEventListener('click', () => {
        categoriesMenu.style.display = isOpen ? 'none' : 'block';
        isOpen = !isOpen;
    });

    categories.forEach(item => {
        item.addEventListener('click', () => {
            getData().then((json) => {
                renderGoods(categoryFilter(json, item.textContent));
            });
        });
    });
};

export default filterByCategory;