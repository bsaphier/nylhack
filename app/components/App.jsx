import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions.jsx';
import * as scss from './App.scss';
// import Navbar from './Navbar';
// import Footer from './Footer';

const App = ({ sayHi, message }) => (
    <div id="main" className={scss.mainContentWrapper}>
        {/* <Navbar /> */}
        {message}
        <br />
        <input onChange={sayHi} />
        {/* <Footer /> */}
    </div>
);


const mapState = state => ({
    message: state.layout.message
});

const mapDispatch = dispatch => ({
    sayHi: event => dispatch(actions.sayHello(event.target.value))
});

export default connect(mapState, mapDispatch)(App);
