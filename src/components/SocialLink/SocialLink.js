import React from "react";
import './SocialLink.css';

export default function SocialLink({icon, name, username, link}) {
    return (
        <a className="SocialLink" href={link} target="_blank">
            <div className="SocialLink-icon">
                <img src={icon} />
            </div>
            <div className="SocialLink-detail">
                <p className="SocialLink-name">{name}</p>
                <p className="SocialLink-link">{"/ " + username}</p>
            </div>
        </a>
    );
}