import React from 'react';
import './about.css';
import Images from './index.js';
const Profile = (props) => {
    const nameParts = props.name.split(" ");
    let partFind = nameParts[0].toLowerCase();
    if (Images[partFind] === undefined) {
        partFind = nameParts[1].toLowerCase();
    }

    return (
        <div className="profile">
            <img src={Images[partFind]} alt={props.name} />
            <p>{nameParts[0] + " " + nameParts[1]}</p>
        </div>
    );
}

export default Profile;