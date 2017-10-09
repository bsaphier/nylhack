import { combineReducers } from 'redux';
import layout from './layout';
import wizard from './wizard';

const rootReducer = combineReducers({
    layout,
    wizard
});

export default rootReducer;
