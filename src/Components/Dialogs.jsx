import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogMsgItem from './DialogMsgItem';
import DialogItem from './DialogItem';


class Dialogs extends React.Component {
    render() {
        return (
            <div className='dialogs'>
                <div className='dialogs__dlg'>
                    <DialogItem name="Albert Einstein" id="1"/>
                    <DialogItem name="Winston Churchill" id="2"/>
                    <DialogItem name="Alfred Hitchcog" id="3"/>
                    <DialogItem name="Franz Kafka" id="4"/>
                    <DialogItem name="Benjamin Franklin" id="5"/>
                    <DialogItem name="Lev Tolstoy" id="6"/>
                    <DialogItem name="Dietmar Rosenthal" id="7"/>
                </div>
                <div className='dialogs__msg'>
                    <DialogMsgItem msg="Hello"/>
                    <DialogMsgItem msg="How are you?"/>
                    <DialogMsgItem msg="Fine thks"/>
                    <DialogMsgItem msg="What's up"/>
                    <DialogMsgItem msg="Cool"/>
                    <DialogMsgItem msg="My library is become to end"/>
                    <DialogMsgItem msg="Sad"/>
                    <DialogMsgItem msg="yeap"/>
                </div>
            </div>
        )
    }
}

export default Dialogs