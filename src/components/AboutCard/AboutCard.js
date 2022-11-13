import React from "react";
import './AboutCard.css';

export default function AboutCard({title, image, description}) {
    return (
        <div className="AboutCard">
            <div className="AboutCard-wrapper">
                <div className="AboutCard-title-div">
                    <img src={image} alt="icon" />
                    <h3 className="AboutCard-title">{title}</h3>
                </div>
                
                <p className="AboutCard-description">{description}</p>
            </div>
        </div>
    );
}