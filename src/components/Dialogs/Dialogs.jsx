import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialogs + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialogs}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Rasul'},
    ]

    let messageData  = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is it going'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'YO'},
        {id: 5, message: 'YO'},

    ]
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id } />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id }/>

            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message }/>
                <Message message={messageData[1].message }/>

            </div>
        </div>
    )
}

export default Dialogs;

