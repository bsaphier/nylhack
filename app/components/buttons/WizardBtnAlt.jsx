import React from 'react';
import * as s from './btns.scss';


export const WizardBtnAlt = ({ action, children }) => {
    return (
        <div className={s.wizardBtnWrapperAlt} onClick={action}>
            {children}
        </div>
    );
};
