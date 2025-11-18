const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json());
};

export default getData;