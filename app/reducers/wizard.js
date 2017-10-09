import * as actionTypes from '../constants';

const Q_TYPES = {
    dropdown: 'ENUM/DROPDOWN'
};

const INIT_STATE = {
    page: 1,
    lastPage: 3,
    questions: [
        {
            id: 'A0',
            values: ['Update beneficiary', 'Update Address', 'Request Loan', 'Update Payment Type', 'Cancel Policy', 'Claim', 'Other'],
            type: Q_TYPES.dropdown,
            answer: ''
        }, {
            id: 'B1',
            values: ['Life Insurance', 'Annuity', 'Mutual Fund', 'Other'],
            type: Q_TYPES.dropdown,
            answer: ''
        }, {
            id: 'C2',
            values: ['Individual', 'Trust'],
            type: Q_TYPES.dropdown,
            answer: ''
        }
    ]
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

        default:
            return nextState;
    }
}
