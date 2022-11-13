import React from "react";

import './ProgramItem.css';
import facebookIcon from '../../assets/facebook-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import discordIcon from '../../assets/discord-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import ImageCarousel from "../ImageCarousel/ImageCarousel";

export default function ProgramItem({ title, description, links, images }) {

    return (
        <div className="ProgramItem">
            <div className="ProgramItem-carousel-wrapper">
                <div className="ProgramItem-carousel">
                    <ImageCarousel />
                </div>
            </div>
            <div className="ProgramItem-detail">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="ProgramItem-link-container">
                    {
                        links.map(element => (
                            <a className="ProgramItem-link" href={element.link} target="_blank">
                                <img
                                    src={{
                                        "FACEBOOK": facebookIcon,
                                        "LINKEDIN": linkedinIcon,
                                        "INSTAGRAM": instagramIcon,
                                        "GITHUB": githubIcon,
                                        "DISCORD": discordIcon
                                    }[element.type]}
                                    alt="linkedin"
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}