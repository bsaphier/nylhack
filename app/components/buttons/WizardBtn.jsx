import React from 'react';
import * as s from './btns.scss';


export const WizardBtn = ({ action, children }) => {
    return (
        <div className={s.wizardBtnWrapper} onClick={action}>
            { children }
        </div>
    );
};
