import React from 'react';
import { NavLink } from 'react-router-dom';

class DialogMsgItem extends React.Component {
    render () {
        let msg = this.props.msg
        return(
            <div>
                <div className='dialogs__msg_items'>
                    {msg}
                </div>
            </div>
        )
    }
}

export default DialogMsgItem