import React from 'react';
import { NavLink } from 'react-router-dom';

class DialogItem extends React.Component {
    render () {
        let path = "/Dialogs/" + this.props.id
        return(
            <div>
                <div className = 'dialogs__dlg_items' >
                    <NavLink to={path}>{this.props.name}</NavLink>
                </div> <hr></hr>
            </div>
        )
    }
}

export default DialogItem