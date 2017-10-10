import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import * as Btns from './buttons';
import * as Pages from './wizard-pages';
import * as s from './wizard.scss';


const Wizard = ({form, page, getForm, questions, changePage, selectAnswer }) => {
    const answers = {
        answer1: questions[0].answer,
        answer2: questions[1].answer,
        answer3: questions[2].answer
    };
    return (
        <div className={s.wizardWrapper}>
            <div className={`${s.carousel} ${s['page1Pos' + page]}`}>
                <Pages.PageOne action={selectAnswer} currPage={page} question={questions[0]} />
            </div>
            <div className={`${s.carousel} ${s['page2Pos' + page]}`}>
                <Pages.PageTwo action={selectAnswer} currPage={page} question={questions[1]} />
            </div>
            <div className={`${s.carousel} ${s['page3Pos' + page]}`}>
                <Pages.PageThree action={selectAnswer} currPage={page} question={questions[2]} />
            </div>
            <div className={`${s.carousel} ${s['page4Pos' + page]}`}>
                <Pages.PageFour action={() => getForm(answers)} currPage={page} answers={questions} form={form} />
            </div>
        </div>
    )
};

const mapState = state => ({
    form: state.wizard.form,
    page: state.wizard.page,
    questions: state.wizard.questions
});

const mapDispatch = dispatch => ({
    getForm: answers => dispatch(actionCreators.getForm(answers)),
    changePage: page => dispatch(actionCreators.changePage(page)),
    selectAnswer: (page, answer) => dispatch(actionCreators.selectAnswer(page, answer))
});

export default connect(mapState, mapDispatch)(Wizard);
