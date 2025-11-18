import getData from "./getData";
import postData from "./postData";

const second = () => {
    const cartBtn = document.getElementById('cart');

    cartBtn.addEventListener('click', () => {
        postData().then((json) => {
            console.log(json);
        });
    });

    // cartBtn.addEventListener('click', () => {
    //     getData().then((json) => {
    //         console.log(json);
    //     });
    // });
};

export default second;