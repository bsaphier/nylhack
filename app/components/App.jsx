import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions.jsx';
import * as scss from './App.scss';
// import Navbar from './Navbar';
// import Footer from './Footer';


class App extends React.Component {

    componentDidMount() {
        this.props.onLoad(window);
    }

    render() {
        const { sayHi, message } = this.props;
        return (
            <div id="main" className={scss.mainContentWrapper}>
                {/* <Navbar /> */}
                { message }
                <br />
                <input onChange={sayHi} />
                {/* <Footer /> */}
            </div>
        );
    }
}


const mapState = state => ({
    message: state.layout.message
});

const mapDispatch = dispatch => ({
    sayHi: event => dispatch(actions.sayHello(event.target.value)),
    onLoad: window => dispatch(actions.getView(window))
});

export default connect(mapState, mapDispatch)(App);
