import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import * as Btns from './buttons';
import * as s from './footer.scss';


const Footer = ({ page, changePage }) => (
    <div className={s.footer}>

        {/* <Btns.NextBtn action={() => changePage(page - 1)}>Prev</Btns.NextBtn> */}
        <div className={`${s.iconBtn} ${s.left}`} onClick={() => changePage(page - 1)}>
            <img className={s.iconPrev} src={`./icons/back-01.svg`} />
        </div>

        {/* <Btns.NextBtn action={() => changePage(page + 1)}>Next</Btns.NextBtn> */}
        <div className={`${s.iconBtn} ${s.right}`} onClick={() => console.log('We havent built this functionality yet.')}>
            <img className={s.iconMenu} src={`./icons/Menu.svg`} />
        </div>
    </div>
);


const mapState = state => ({
    page: state.wizard.page,
});

const mapDispatch = dispatch => ({
    changePage: page => dispatch(actionCreators.changePage(page)),
});

export default connect(mapState, mapDispatch)(Footer);
