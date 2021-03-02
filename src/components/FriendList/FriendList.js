import React from 'react';

const FriendList = (props) => {
    const { name, salary } = props.friend
    return (
        <div>
            <h2>{name}</h2>
            <h3>${salary}</h3>
        </div>
    );
};

export default FriendList;