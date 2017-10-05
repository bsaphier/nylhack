import * as actionTypes from '../constants.jsx';


const INIT_STATE = {
    message: 'Hellooooo'
};

export default (state = INIT_STATE, action) => {
    const nextState = {...state};
    switch (action.type) {
        case actionTypes.SAY_HELLO:
            nextState.message = action.message;
            return nextState;
        default:
            return nextState;
    }
}