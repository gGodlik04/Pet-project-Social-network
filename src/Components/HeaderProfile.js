import React from 'react';

class HeaderProfile extends React.Component
{
    render () {
        return (
            <div className='header-profile'>
                <div className='bg-header-profile'></div>
                    <div className='header-profile__options'>
                        <div>
                            <a>Create post</a>
                        </div>
                        <div>
                            <a>Edit profile</a>
                        </div>
                        <div>
                            <a><span>Альберт Эйнштейн</span></a>
                        </div>
                        <div>
                            <a>Moscow,<br></br>40 years old</a>
                        </div>
                        <div>
                            <a>Online</a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default HeaderProfile