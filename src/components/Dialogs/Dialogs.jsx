import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active }>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Dmitry
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Rasul
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your university?</div>
                <div className={s.dialog}>Yo</div>


            </div>
        </div>
    )
}

export default Dialogs;

