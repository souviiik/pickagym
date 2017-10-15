import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import GymsReducer from './reducer_gyms';

const rootReducer = combineReducers({
  gyms: GymsReducer,
  form: formReducer
});

export default rootReducer;
