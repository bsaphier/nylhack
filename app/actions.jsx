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


export const getView = (_window) => dispatch => {
    dispatch(resize(
        {
            dimensions: {
                width: _window.innerWidth,
                height: _window.innerHeight
            },
            orientation: _window.screen.orientation.type
        }
    ));
};
