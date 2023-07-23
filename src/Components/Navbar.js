import React from 'react'
import { HandySvg } from 'handy-svg';
import iconProfile from './../icons-svg/profile.svg';
import iconHome from './../icons-svg/home.svg'
import iconMessages from './../icons-svg/messages.svg'
import iconPhotos from './../icons-svg/photos.svg'
import iconSettings from './../icons-svg/settings.svg'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div className='navbar__item'>
                    <HandySvg
                        src={iconProfile}
                        className="icon"
                        width="25"
                        height="25"
                    />
                    <NavLink to="/Wall">Profile</NavLink>
                </div>
                <div className='navbar__item'> 
                    <HandySvg
                        src={iconMessages}
                        className="icon"
                        width="25"
                        height="25"
                    />
                    <NavLink to="/Dialogs">Dialogs</NavLink>
                </div>
                <div className='navbar__item'>
                    <HandySvg
                        src={iconHome}
                        className="icon"
                        width="25"
                        height="25"
                    />
                    <NavLink to="/Home">Home</NavLink>
                </div>
                <div className='navbar__item'>
                    <HandySvg
                        src={iconPhotos}
                        className="icon"
                        width="25"
                        height="25"
                    />
                    <NavLink to="/Photos">Photos</NavLink>
                </div>
                <div className='navbar__item'>
                    <HandySvg
                        src={iconSettings}
                        className="icon"
                        width="25"
                        height="25"
                    />
                    <NavLink to="/Settings" >Settings</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar