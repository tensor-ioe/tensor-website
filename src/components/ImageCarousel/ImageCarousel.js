import React, { useState } from "react";

import './ImageCarousel.css';
import nextIcon from '../../assets/next.svg';
import previousIcon from '../../assets/previous.svg';

export default function ImageCarousel({ images }) {
    const [slideIndex, setSlideIndex] = useState(1)

    const imageList = [
        "/images/programs/test/1.jpg",
        "/images/programs/test/2.jpg",
        "/images/programs/test/3.jpg",
        "/images/programs/test/4.jpg",
        "/images/programs/test/5.jpg",
        "/images/programs/test/6.jpg",
    ]

    const nextSlide = () => {
        if(slideIndex < imageList.length)
            setSlideIndex(slideIndex + 1)
        else
            setSlideIndex(1)
    }

    const prevSlide = () => {
        if(slideIndex > 1)
            setSlideIndex(slideIndex - 1)
        else
            setSlideIndex(imageList.length)
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="ImageCarousel">
            {imageList.map((element, index) => (
                <div
                    key={index}
                    className={ slideIndex === index + 1 ? "ImageCarousel-slide ImageCarousel-active-anim": "ImageCarousel-slide"}
                >
                    <img src={element} alt="gallery" />
                </div>
            ))}

            <img
                className="ImageCarousel-btn ImageCarousel-previous"
                src={previousIcon}
                alt="previous"
                onClick={() => prevSlide()}
            />
            <img
                className="ImageCarousel-btn ImageCarousel-next"
                src={nextIcon}
                alt="next"
                onClick={() => nextSlide()}
            />

            <div className="ImageCarousel-dots-container">
                {
                    Array.from({ length: imageList.length }).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "ImageCarousel-dot ImageCarousel-dot-active": "ImageCarousel-dot"}
                        ></div>
                    ))
                }
            </div>
        </div>
    );
}