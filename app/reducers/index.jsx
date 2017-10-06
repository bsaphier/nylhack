import { combineReducers } from 'redux';
import layoutReducer from './layout.jsx';
import formsReducer from './forms.jsx';

const rootReducer = combineReducers({
    layout: layoutReducer,
    forms: formsReducer,
});

export default rootReducer;
