import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>{props.message}
            <div>
                <div>
                <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>

    )
}


export default Message;

