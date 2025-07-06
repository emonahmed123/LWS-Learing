import axios from 'axios';



const token = "jhdjfhdjfhdjfh";
const api = axios.create({
    baseURL: 'http://localhost:3000',
})


api.interceptors.response.use((config) => {
    console.log("Response Interceptor", config);


    config.headers.Authorization = "Bearer " + token;
    return config;
}, (err) => {

    return Promise.reject(err);
})

api.interceptors.request.use((response) => {
    console.log("Request Interceptor", response);
    return response;
}, (err) => {
    return Promise.reject(err);
});

export default api;

