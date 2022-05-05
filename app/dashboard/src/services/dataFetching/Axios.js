import axios from 'axios';

const host = process.env.HOST;

const Axios = axios.create({
    baseURL: host
})

export default Axios;