const getData = (str) => {
    //`https://testozone-5953b-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}` // Firebase так не умеет
    return fetch(`https://testozone-5953b-default-rtdb.firebaseio.com/goods.json`)
        .then((response) => response.json());
};

export default getData;