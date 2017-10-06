import * as actionTypes from '../constants.jsx';


const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
    const nextState = {...state};
    switch (action.type) {
        default:
            return nextState;
    }
}
