import * as actionTypes from '../constants.jsx';


const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case actionTypes.LOAD_RULES:
            return action.rules;

        default:
            return state;
    }
}
