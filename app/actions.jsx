import * as actions from './constants.jsx';
import { getSizes } from './utils';


/* LAYOUT ACTION CREATORS */
export const sayHello = msg => ({
    type: actions.SAY_HELLO,
    message: msg
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

export const getView = (window) => dispatch => {
    const { width, height, orientation } = getSizes(window);
    dispatch(resize({
        dimensions: {width, height},
        orientation
    }));
};


/* FORM-RULE ACTION CREATORS */
export const selectForm = (form) => ({
    type: actions.SELECT_FORM,
    form
});

export const addRule = (rule) => ({
    type: actions.ADD_RULE,
    rule
});

export const editRule = (rule) => ({
    type: actions.EDIT_RULE,
    rule
});

export const removeRule = (ruleId) => ({
    type: actions.REMOVE_RULE,
    ruleId
});

/* FORMS ACTION CREATORS */
export const loadForms = (forms) => ({
    type: actions.LOAD_FORMS,
    forms
});

/* RULES ACTION CREATORS */
export const loadRules = (rules) => ({
    type: actions.LOAD_RULES,
    rules
});
