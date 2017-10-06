import * as actionTypes from '../constants.jsx';


const INIT_STATE = [];

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case actionTypes.LOAD_FORMS:
            return action.forms;

        case actionTypes.SAVE_FORM:
            return state.map(form => (action.form.id === form.id) ? action.form : form);

        default:
            return state;
    }
}
