import React from "react";
import './TeamPhoto.css';

export default function TeamPhoto({name, image, post}) {
    return (
        <div className="TeamPhoto">
            <div className="TeamPhoto-wrapper">
                <img src={image} alt={name} />
                <div className="TeamPhoto-detail">
                    <p className="TeamPhoto-name">{name}</p>
                    <p className="TeamPhoto-post">{post}</p>
                </div>
            </div>
        </div>
    );
}