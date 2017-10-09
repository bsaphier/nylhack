import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import * as Btns from './buttons';
import * as Pages from './wizard-pages';
import * as s from './wizard.scss';

class Wizard extends Component {
    render() {
        const { page, questions, changePage, selectAnswer } = this.props;
        return (
            <div className={s.wizardWrapper}>
                {page === 1 && <Pages.PageOne action={selectAnswer} currPage={page} question={questions[0]} />}
                {page === 2 && <Pages.PageTwo action={selectAnswer} currPage={page} question={questions[1]} />}
                {page === 3 && <Pages.PageThree action={selectAnswer} currPage={page} question={questions[2]} />}
                <div className={s.wizardFooter}>
                    <div className={s.iconBtn} onClick={() => changePage(page - 1)}>
                        <img className={s.icon} src={`./icons/back-01.svg`} />
                    </div>
                    <div className={s.iconBtn} onClick={() => console.log('We havent built this functionality yet.')}>
                        <img className={s.icon} src={`./icons/Menu.svg`} />
                    </div>
                    {/* <Btns.NextBtn action={() => changePage(page - 1)}>Prev</Btns.NextBtn> */}
                    {/* <Btns.NextBtn action={() => changePage(page + 1)}>Next</Btns.NextBtn> */}
                </div>
            </div>
        );
    }
}

const mapState = state => ({
    page: state.wizard.page,
    questions: state.wizard.questions
});

const mapDispatch = dispatch => ({
    changePage: page => dispatch(actionCreators.changePage(page)),
    selectAnswer: (page, answer) => dispatch(actionCreators.selectAnswer(page, answer))
});

export default connect(mapState, mapDispatch)(Wizard);
