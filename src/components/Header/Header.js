import React from 'react';
import './Header.css';
import logo from '../../images/J.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <nav><a href="/timeline">Timeline</a><a href="/friends">Friends</a><a href="/profile">Profile</a></nav>
        </div>
    );
};

export default Header;