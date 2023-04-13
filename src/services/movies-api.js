import axios from "axios";

const API_KEY = '0feaca93847c0f717b0c2876a0a51030';
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export async function fetchTrandingMovies(page) {
    try {
        const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch(error) {
        console.log(error.message);
    }
}

// export default class FetchMoviesAPI {
//     static #API_KEY = '0feaca93847c0f717b0c2876a0a51030';
//     static #BASE_URL = 'https://api.themoviedb.org/3/';
//     #query;
//     #page;

//     constructor() {
//         this.#page = 1;
//     }


//     async getTrendingMovies() {
//         const response = await axios.get(`${this.#BASE_URL}/trending/movie/day${this.#API_KEY}`);
//         console.log(response);

//         if (response.status === 200) {
//             return response;
//         }
//     }
// };

