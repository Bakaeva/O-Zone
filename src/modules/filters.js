export const titleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase());
    });
};

export const categoryFilter = (goods, category) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === category;
    });
};

export const priceFilter = (goods, minPrice, maxPrice) => {
    return goods.filter((goodsItem) => {
        return minPrice === '' && maxPrice === '' ? goods :
            minPrice !== '' && maxPrice !== '' ? goodsItem.price >= +minPrice && goodsItem.price <= +maxPrice :
                minPrice !== '' && maxPrice === '' ? goodsItem.price > +minPrice :
                    goodsItem.price <= +maxPrice; //minPrice === '' && maxPrice !== ''
    });
};

export const discountFilter = (goods, checked) => {
    return goods.filter((goodsItem) => {
        return checked ? goodsItem.sale === true : goodsItem;
    });
};