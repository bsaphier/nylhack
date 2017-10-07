import { combineReducers } from 'redux';
import layoutReducer from './layout.jsx';

const rootReducer = combineReducers({
    layout: layoutReducer
});

export default rootReducer;
