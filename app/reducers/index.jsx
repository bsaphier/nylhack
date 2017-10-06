import { combineReducers } from 'redux';
import formsReducer from './forms.jsx';
import layoutReducer from './layout.jsx';
import formsRulesReducer from './form-rules.jsx';

const rootReducer = combineReducers({
    layout: layoutReducer,
    forms: formsReducer,
    selectedForm: formsRulesReducer,
});

export default rootReducer;
