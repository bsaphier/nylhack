import * as actionTypes from '../constants';


const POSSIBLE_ANSWERS_STEP_1 = ['Update beneficiary', 'Update Address', 'Request Loan', 'Update Payment Type', 'Cancel Policy', 'Claim', 'Other'];
const POSSIBLE_ANSWERS_STEP_2 = ['Life Insurance', 'Annuity', 'Mutual Fund', 'Other'];
const POSSIBLE_ANSWERS_STEP_3 = ['Individual', 'Trust'];


const INIT_STATE = {
    page: 1,
    lastPage: 4,
    questions: [
        {
            id: 'A0',
            required: true,
            values: POSSIBLE_ANSWERS_STEP_1,
            answer: ''
        }, {
            id: 'B1',
            required: true,
            values: POSSIBLE_ANSWERS_STEP_2,
            answer: ''
        }, {
            id: 'C2',
            required: true,
            values: POSSIBLE_ANSWERS_STEP_3,
            answer: ''
        }
    ],
    form: undefined // {name: string; link: string;} 
};


export default (state = INIT_STATE, action) => {
    const nextState = { ...state };

    switch (action.type) {

        case actionTypes.WIZARD_PAGE:
            if (action.page < 1) {
                nextState.page = 1;
            } else if (action.page > state.lastPage) {
                nextState.page = state.lastPage;
            } else {
                nextState.page = action.page;
            }
            // reset the form
            nextState.form = undefined;
            return nextState;

        case actionTypes.WIZARD_ANSWER_Q: 
            nextState.questions = state.questions.map(
                q => {
                    if (q.id === action.answer.id) {
                        q.answer = action.answer.value
                    }
                    return q;
                }
            );
            return nextState;

        case actionTypes.FOUND_FORM:
            nextState.form = action.form;
            return nextState;

        default:
            return nextState;
    }
}
