import axios from "axios";
import LocalStorageService from "./localStorage.service";
//import router from "./router/router";


const baseUrl =
    "https://imdb-api.com/API/Top250Movies/";

console.log(process.env.REACT_APP_MOVIE_API_KEY)
const getMovieData = async () => {
    const response = await axios.get(`${baseUrl}${process.env.REACT_APP_MOVIE_API_KEY}`);
    return response;
};
// LocalstorageService
const localStorageService = LocalStorageService.getService();

// Add a request interceptor
axios.interceptors.request.use((config) => {
    const token = localStorageService.getAccessToken();
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
},
    error => {
        Promise.reject(error)
    });


// Add a response interceptor
axios.interceptors.response.use((response) => {
    return response;
}, async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest.url ===
        'http://192.168.1.27:3001/v1/auth/token') {
        //router.push('/login');
        return Promise.reject(error);
    }
    if (error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;
        const res = await axios.post('/auth/token',
            {
                "refresh_token": localStorageService.getRefreshToken()
            });
        if (res.status === 201) {
            // 1) put token to LocalStorage
            localStorageService.setToken(res.data);

            // 2) Change Authorization header
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();

            // 3) return originalRequest object with Axios.
            return axios(originalRequest);
        }
    }
    // return Error object with Promise
    return Promise.reject(error);
});


export default getMovieData;