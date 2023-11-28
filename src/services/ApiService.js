import axios from 'axios';

const BASE_URL = 'https://bankly-backend.onrender.com/api/';

export const sendPostRequest = (postData, endpoint) => 
{
    return axios.post(`${BASE_URL}${endpoint}`, {"data": postData});
}
