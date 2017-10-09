import React from 'react';
import * as s from './wizard-pages.scss';
import * as Btns from '../buttons';


export const PageOne = ({ currPage, question, children, action }) => {
    const onSelect = value => action(currPage, { id: question.id, value });
    return (
        <div className={s.wizardPage}>
            {
                question.values.map((displayName, i) => (
                    <Btns.WizardBtn key={displayName} action={() => onSelect(displayName)}>
                        <div className={s.iconWrap}>
                            {i < 6 ? (<img className={s.icon} src={`./icons/Icons-0${i+1}.svg`} />) : ''}
                        </div>
                        <div className={s.displayName}>{displayName}</div>
                    </Btns.WizardBtn>
                ))
            }
        </div>
    );
};
