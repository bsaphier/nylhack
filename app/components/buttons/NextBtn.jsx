import React from 'react';
import * as s from './btns.scss';


export const NextBtn = ({ action, children }) => {
    return (
        <div className={s.btnWrapper}>
            <div className={s.nextBtn} onClick={action}>
                { children }
            </div>
        </div>
    );
};
