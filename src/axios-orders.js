import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-2685d-default-rtdb.firebaseio.com/'
});

export default instance;