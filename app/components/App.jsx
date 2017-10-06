import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions.jsx';
import * as scss from './App.scss';


class Rule {
    constructor(id) {
        this.id = id;
        this.type = 'evaluate';
    }

    evaluate(input) {
        return input > 50;
    }
}

const ruleA = new Rule('a');
const ruleB = new Rule('b');
const ruleC = new Rule('c');

const _forms = [
    {
        id: 0,
        name: 'FormA',
        metaData: {},
        rules: [ruleA]
    }, {
        id: 1,
        name: 'FormB',
        metaData: {},
        rules: [ruleA, ruleB]
    }, {
        id: 2,
        name: 'FormC',
        metaData: {},
        rules: [ruleC]
    }
];


const _rules = [
    ruleA,
    ruleB,
    ruleC
];


class App extends React.Component {

    componentDidMount() {
        this.props.onLoad(window);
        this.props.loadForms(_forms);
        this.props.loadRules(_rules);
    }

    render() {
        const { rules, forms, sayHi, message, addRule, selectForm, selectedForm } = this.props;
        return (
            <div id="main" className={scss.mainContentWrapper}>
                { message }
                <br />
                <input onChange={sayHi} />
                <div className={scss.contentBox}>
                    <div className={scss.contentWrapper}>
                        {
                            forms.map(form =>
                                <div key={form.id} className={scss.btn} onClick={() => selectForm(form)}>{form.name}</div>
                            )
                        }
                    </div>
                    <div className={scss.contentWrapper}>
                        {
                            rules.map(rule =>
                                <div key={rule.id} className={scss.btn} onClick={() => addRule(rule)}>{`Rule ${rule.id}: ${rule.type}`}</div>
                            )
                        }
                    </div>
                    <div className={scss.contentWrapper}>
                        {`Selected Form: ${selectedForm.name}`}
                        <br />
                        {`Rules: ${selectedForm.rules.map(rule => rule.type).join(' ')}`}
                    </div>
                </div>
            </div>
        );
    }
}


const mapState = state => ({
    message: state.layout.message,
    forms: state.forms,
    rules: state.rules,
    selectedForm: state.selectedForm
});

const mapDispatch = dispatch => ({
    sayHi: event => dispatch(actions.sayHello(event.target.value)),
    onLoad: window => dispatch(actions.getView(window)),
    loadForms: forms => dispatch(actions.loadForms(forms)),
    selectForm: form => dispatch(actions.selectForm(form)),
    loadRules: rules => dispatch(actions.loadRules(rules)),
    addRule: rule => dispatch(actions.addRule(rule)),
    editRule: rule => dispatch(actions.editRule(rule)),
    removeRule: id => dispatch(actions.removeRule(id)),
});

export default connect(mapState, mapDispatch)(App);
