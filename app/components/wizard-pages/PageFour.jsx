import React from 'react';
import * as s from './wizard-pages.scss';
import * as Btns from '../buttons';


export const PageFour = ({ form, action, answers, children }) => {
    let btnAction = form
        ? () => {window.open(form.link)}
        : () => action(answers);

    return (
        <div className={s.wizardPageAlt}>
            {form &&
                <div className={s.message}>
                    {(form && form.name.length)?
                        (<p>{'You\'re looking for form: '}<span>{form.name}</span></p>)
                        : <p>{`We couldn't quickly find the right form. Sorry about that!`}</p>
                    }
                </div>
            }
            <Btns.WizardBtnAlt action={btnAction}>
                <div className={s.displayNameAlt}>{form ? 'Fill Out Form' : 'Find My Form'}</div>
            </Btns.WizardBtnAlt>
        </div>
    );
};
