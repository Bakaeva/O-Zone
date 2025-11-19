import getData from './getData';
import renderGoods from './renderGoods';

const load = () => {
    getData().then((json) => {
        renderGoods(json);
    });
};

export default load;