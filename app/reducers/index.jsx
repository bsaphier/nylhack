import { combineReducers } from 'redux';
import formsReducer from './forms.jsx';
import rulesReducer from './rules.jsx';
import layoutReducer from './layout.jsx';
import formsRulesReducer from './form-rules.jsx';

const rootReducer = combineReducers({
    layout: layoutReducer,
    forms: formsReducer,
    rules: rulesReducer,
    selectedForm: formsRulesReducer,
});

export default rootReducer;
