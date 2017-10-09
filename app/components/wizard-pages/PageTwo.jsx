import React from 'react';
import * as s from './wizard-pages.scss';
import * as Btns from '../buttons';


export const PageTwo = ({ currPage, question, children, action }) => {
    const onSelect = value => action(currPage, { id: question.id, value });
    return (
        <div className={s.wizardPageAlt}>
            {
                question.values.map((displayName, i) => (
                    <Btns.WizardBtnAlt key={displayName} action={() => onSelect(displayName)}>
                        <div className={s.displayNameAlt}>{displayName}</div>
                    </Btns.WizardBtnAlt>
                ))
            }
        </div>
    );
};
