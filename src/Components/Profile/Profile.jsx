import React from 'react';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import Post from './Post/Post';

class Profile extends React.Component
{
    render () {
        return (
            <div className='profile'>
                <HeaderProfile/>
                <Post msg="hello"/>
                <Post msg="how are y?"/>
                <Post msg="something wrong"/>
                <Post msg="matter"/>
            </div>
        )
    }
}

export default Profile