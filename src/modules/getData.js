const getData = () => {
    return fetch('https://testozone-5953b-default-rtdb.firebaseio.com/goods.json')
        .then((response) => response.json());
};

export default getData;