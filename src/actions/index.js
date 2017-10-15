import axios from 'axios';
export const SEARCH_GYM = 'search_gym';

export function searchGym(value) {
    const {zipcode} = value;
    const API_KEY = 'AIzaSyBVGJ-SsExoPPm0MzsyW0wHgn09EJftGCE';
    const ROOT_URL_1 = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
    const ROOT_URL_2 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

    const PLACE_DETAILS = axios.get(`${ROOT_URL_1}${zipcode}&key=${API_KEY}`)
    .then(() => {
        const { lat, lng } = PLACE_DETAILS.results[0].geometry.location;
        // const { lng } = PLACE_DETAILS.results[0].geometry.location;
        const ONE_MILE = 1609.34;

        const request = axios.get(axios.get(`${ROOT_URL_2}location=${lat},${lng}&type=gym&radius=${ONE_MILE*5}&key=${API_KEY}`));         
    });

    return {
        type: SEARCH_GYM,
        payload: request
    };
    
    /* FIRST REQUEST
    https://maps.googleapis.com/maps/api/place/textsearch/json?query=
    700039
    &key=AIzaSyBVGJ-SsExoPPm0MzsyW0wHgn09EJftGCE
    */

    /* SECOND REQUEST
    location=22.5280284,88.38634449999999&radius=500&type=gym&key=AIzaSyBVGJ-SsExoPPm0MzsyW0wHgn09EJftGCE
    */
}
