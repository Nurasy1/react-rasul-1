import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message= (props)=>{
   return <div className={s.dialogs}>{props.message}</div>
}

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Andrew" id="1"/>
                <DialogItem name="Dmitry" id="2"/>
                <DialogItem name="Sasha" id="3"/>
                <DialogItem name="Valera" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Rasul" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How is it going?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Hi"/>
            </div>
        </div>
    )
}

export default Dialogs;

