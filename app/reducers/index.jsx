import { combineReducers } from 'redux';
import layoutReducer from './layout.jsx';
import formsRulesReducer from './forms-rules-map.jsx';

const rootReducer = combineReducers({
    layout: layoutReducer,
    forms: formsRulesReducer,
});

export default rootReducer;
