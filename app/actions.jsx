import * as actions from './constants.jsx';
import { getSizes } from './utils';


/* LAYOUT ACTION CREATORS */
export const sayHello = message => ({
    type: actions.SAY_HELLO,
    message
});

export const openBurger = () => ({
    type: actions.OPEN_BURGER,
});

export const closeBurger = () => ({
    type: actions.CLOSE_BURGER
});

export const resize = ({ dimensions, orientation }) => ({
    type: actions.RESIZE,
    dimensions,
    orientation
});


export const onResize = ({ target }) => dispatch => {
    const { width, height, orientation } = getSizes(target);
    dispatch(resize({
        dimensions: {width, height},
        orientation
    }));
};

export const getView = (window) => dispatch => {
    const { width, height, orientation } = getSizes(window);
    dispatch(resize({
        dimensions: {width, height},
        orientation
    }));
};
