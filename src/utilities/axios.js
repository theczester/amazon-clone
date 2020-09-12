import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-fc834.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-fc834/us-central1/api'
})

export default instance;