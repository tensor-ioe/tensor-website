import React from "react";
import "./SectionTitle.css";
import TitleBorder from "../../assets/title-border.svg";

export default function SectionTitle({ title }) {
  return (
    <div className="flex flex-col items-center mt-16 mb-20">
      <div className="text-center pb-8 relative">
        <img
          className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
          src={TitleBorder}
        />
        <h2 className="inline font-semibold text-4xl text-black">{title}</h2>
        <img
          className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rotate-180"
          src={TitleBorder}
        />
      </div>
    </div>
  );
}
