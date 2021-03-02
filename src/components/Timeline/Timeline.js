import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeDATA.json';
import FriendList from '../FriendList/FriendList';
import Profile from '../Profile/Profile';
import './Timeline.css'

const Timeline = () => {
    const users = fakeData
    const [profiles, setProfiles] = useState(users)
    const [friends, setFriends] = useState([])

    const handleProfile = (profile) => {
        const newFriends = [...friends, profile]
        setFriends(newFriends)
    }

    return (
        <div className="timeline-container">
            <div className="newsfeed">
                <div className="newsfeed-box">
                    {
                        profiles.map(profile => <Profile handleProfile={handleProfile} profile={profile} key={profile.id}></Profile>)
                    }
                </div>
            </div>
            <div className="friends">
                <h2>Sidebar</h2>
                <h3>Friends Added: {friends.length}</h3>
                {
                    friends.map(friend => <FriendList friend={friend} key={friend.id}></FriendList>)
                }
            </div>
        </div>
    )
};

export default Timeline;