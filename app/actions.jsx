import * as actionTypes from './constants.jsx';
import { getSizes } from './utils';


/* LAYOUT ACTIONS */
export const sayHello = msg => ({
    type: actionTypes.SAY_HELLO,
    message: msg
});

export const openBurger = () => ({
    type: actionTypes.OPEN_BURGER,
});

export const closeBurger = () => ({
    type: actionTypes.CLOSE_BURGER
});

export const resize = ({ dimensions, orientation }) => ({
    type: actionTypes.RESIZE,
    dimensions,
    orientation
});

export const getView = (window) => dispatch => {
    const { width, height, orientation } = getSizes(window);
    dispatch(resize({
        dimensions: {width, height},
        orientation
    }));
};
