import _ from 'lodash';
import { SEARCH_GYM } from '../actions';

export default function(state = {}, action){
    switch (action.type) {
    case SEARCH_GYM:
        return _.mapKeys(action.payload.results, 'id');
    default:
        return state;
    }
}