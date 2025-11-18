import getData from "./getData";

const second = () => {
    const cartBtn = document.getElementById('cart');

    getData().then((json) => {
        console.log(json)
    });
};

export default second;