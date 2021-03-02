import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const Profile = (props) => {
    const { image, name, salary } = props.profile
    return (
        <div className="profile-box">
            <img src={image} alt="image" />
            <h2>{name}</h2>
            <h3>${salary}</h3>
            <button onClick={() => props.handleProfile(props.profile)}> <span>Add Friend</span>  <FontAwesomeIcon className="font-icon" icon={faPlusSquare} /></button>
        </div>
    );
};

export default Profile;