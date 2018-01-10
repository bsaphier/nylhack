import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as s from './app.scss';
import Wizard from './Wizard.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {

    // componentDidMount() {
        // this.props.onLoad(window);
        // window.addEventListener('resize', this.props.onResize);
    // }

    // componentWillUnmount() {
        // window.removeEventListener('resize', this.props.onResize);
    // }

    render() {
        const { message } = this.props;
        return (
            <div id="main" className={s.container}>
                <div className={s.pageContent}>
                    <Wizard />
                </div>
                <Footer />
            </div>
        );
    }
}


const mapState = state => ({ ...state });

const mapDispatch = dispatch => ({
    // onLoad: window => dispatch(actions.getView(window)),
    // onResize: $event => dispatch(actions.getView($event.target))
});

export default connect(mapState, mapDispatch)(App);
