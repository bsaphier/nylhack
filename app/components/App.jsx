import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions.jsx';
import * as scss from './App.scss';


class App extends React.Component {

    componentDidMount() {
        this.props.onLoad(window);
        window.addEventListener('resize', this.props.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.onResize);
    }

    render() {
        const { sayHi, message } = this.props;
        return (
            <div id="main" className={scss.mainContentWrapper}>
                <div className={scss.contentBox}>
                    <input onChange={sayHi} value={message} />
                </div>
            </div>
        );
    }
}


const mapState = state => ({
    message: state.layout.message
});

const mapDispatch = dispatch => ({
    sayHi: event => dispatch(actions.sayHello(event.target.value)),
    onLoad: window => dispatch(actions.getView(window)),
    onResize: $event => dispatch(actions.onResize($event))
});

export default connect(mapState, mapDispatch)(App);
