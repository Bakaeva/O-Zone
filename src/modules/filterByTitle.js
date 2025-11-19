import getData from './getData';
import renderGoods from './renderGoods';
import { titleFilter } from './filters';

const filterByTitle = () => {
    const searhInput = document.querySelector('.search-wrapper_input');
    searhInput.addEventListener('input', (e) => {
        getData().then((json) => {
            renderGoods(titleFilter(json, e.target.value));
        });
    });
};

export default filterByTitle;