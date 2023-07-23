import React from 'react';

class Post extends React.Component
{
    render () {
        return (
            <div className='post'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbr_FfB-KCt-JjiMRNxyUkhN7Zui5javzKQLUbZblexQ&s'/>
                <p>{this.props.msg}</p>
                <span>like</span>
            </div>
        )
    }
}

export default Post