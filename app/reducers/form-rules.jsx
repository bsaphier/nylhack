import * as actionTypes from '../constants.jsx';


const INIT_STATE = {
    id: 0,
    name: '',
    metaData: {},
    rules: []
};

export default (state = INIT_STATE, action) => {
    const nextState = {...state};
    switch (action.type) {

        case actionTypes.SELECT_FORM:
            return action.form;

        case actionTypes.ADD_RULE:
            nextState.rules.push(action.rule);
            return nextState;

        case actionTypes.EDIT_RULE:
            nextState.rules = state.rules.map(rule => (action.rule.id === rule.id) ? action.rule : rule);
            return nextState;

        case actionTypes.REMOVE_RULE:
            nextState.rules = state.rules.filter(rule => action.ruleId === rule.id);
            return nextState;

        default:
            return nextState;
    }
}
