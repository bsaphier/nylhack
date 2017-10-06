import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions.jsx';
import * as scss from './App.scss';


const _forms = [
    {
        id: 0,
        name: 'FormA',
        metaData: {},
        rules: ['a']
    }, {
        id: 1,
        name: 'FormB',
        metaData: {},
        rules: ['a','b']
    }, {
        id: 2,
        name: 'FormC',
        metaData: {},
        rules: ['c']
    }
];

class Rule {
    constructor(id) {
        this.id = id;
    }

    evaluate(input) {
        return input > 50;
    }
}

const _rules = [
    new Rule('a'),
    new Rule('b'),
    new Rule('c')
];


class App extends React.Component {

    componentDidMount() {
        this.props.onLoad(window);
        this.props.loadForms(_forms);
    }

    render() {
        const { forms, sayHi, message, selectForm, selectedForm } = this.props;
        return (
            <div id="main" className={scss.mainContentWrapper}>
                { message }
                <br />
                <input onChange={sayHi} />
                <div className={scss.formsWrapper}>
                    {
                        forms.map(form =>
                            <div key={form.id} className={scss.form} onClick={() => selectForm(form)}>{form.name}</div>
                        )
                    }
                </div>
                <div>{`Selected Form: ${selectedForm.name}`}</div>
            </div>
        );
    }
}


const mapState = state => ({
    message: state.layout.message,
    forms: state.forms,
    selectedForm: state.selectedForm
});

const mapDispatch = dispatch => ({
    sayHi: event => dispatch(actions.sayHello(event.target.value)),
    onLoad: window => dispatch(actions.getView(window)),
    loadForms: forms => dispatch(actions.loadForms(forms)),
    selectForm: form => dispatch(actions.selectForm(form)),
    addRule: rule => dispatch(actions.addRule(rule)),
    editRule: rule => dispatch(actions.editRule(rule)),
    removeRule: id => dispatch(actions.removeRule(id)),
});

export default connect(mapState, mapDispatch)(App);
