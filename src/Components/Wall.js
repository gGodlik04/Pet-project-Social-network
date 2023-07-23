import React from 'react';
import HeaderProfile from './HeaderProfile';
import Post from './Post';

class Wall extends React.Component
{
    render () {
        return (
            <div className='wall'>
                <HeaderProfile/>
                <Post msg="hello"/>
                <Post msg="how are y?"/>
                <Post msg="something wrong"/>
                <Post msg="matter"/>
            </div>
        )
    }
}

export default Wall