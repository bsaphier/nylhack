import * as actionTypes from './constants.jsx';

export const sayHello = msg => ({
    type: actionTypes.SAY_HELLO,
    message: msg
});
