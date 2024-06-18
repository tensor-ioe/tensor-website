import React from "react";
import './SectionTitle.css';
import TitleBorder from "../../assets/title-border.svg";

export default function SectionTitle({title}) {
    return (
        <div className="SectionTitle">
            <img className="SectionTitle-border-left" src={TitleBorder} />
            <h2 className="SectionTitle-text">{title}</h2>
            <img className="SectionTitle-border-right" src={TitleBorder} />
        </div>
    );
}