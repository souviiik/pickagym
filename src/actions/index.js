import axios from 'axios';
export const SEARCH_GYM = 'search_gym';

export function searchGym(zipcode) {
    alert(JSON.stringify(zipcode, null, 4));
    //const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: SEARCH_GYM,
        payload: 'request'
    };
}