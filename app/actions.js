import * as actionTypes from './constants';
import * as utils from './utils';


/* LAYOUT ACTION CREATORS */
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


/* WIZARD ACTION CREATORS */
export const changePage = page => ({
    type: actionTypes.WIZARD_PAGE,
    page
});

/**
 * @param {id: number; value: string | any} answer 
 */
export const answerQuestion = answer => ({
    type: actionTypes.WIZARD_ANSWER_Q,
    answer
});

export const selectAnswer = (currentPage, answer) => dispatch => {
    dispatch(changePage(++currentPage));
    dispatch(answerQuestion(answer));
};

export const foundForm = form => ({
    type: actionTypes.FOUND_FORM,
    form
});

export const getForm = (answers) => dispatch => {
    dispatch(foundForm(utils.fireRuleForForm(answers)));
};