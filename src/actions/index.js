import axios from 'axios';
export const SEARCH_GYM = 'search_gym';

export function searchGym(zipcode) {
    console.log(zipcode);
    //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: SEARCH_GYM,
        payload: 'request'
    };
}