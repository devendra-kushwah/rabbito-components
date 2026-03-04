"use client";
import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const defaultSlides: React.ReactNode[] = [
    'Welcome to Automotive Expert!',
    <div>
        <h2 style={{ color: '#fff', margin: 0 }}>Quality Car Care</h2>
        <p style={{ color: '#fff', margin: 0 }}>Professional service for your vehicle</p>
    </div>,
    <img src="/next.svg" alt="Automotive" style={{ width: '100%', height: 160, objectFit: 'contain', background: '#364d79' }} />
];

interface SliderProps {
    slides?: React.ReactNode[];
    infinite?: boolean;
    autoplaySpeed?: number;
    autoplay?: boolean;
}

const Slider: React.FC<SliderProps> = ({ slides, infinite = true, autoplaySpeed = 1000, autoplay }) => {
    const data = slides && slides.length > 0 ? slides : defaultSlides;
    return (
        <Carousel arrows autoplaySpeed={autoplaySpeed} infinite={infinite} autoplay={autoplay}>
            {data.map((slide, idx) => (
                <div key={idx}>
                    {typeof slide === 'string' ? (
                        <h3 style={contentStyle}>{slide}</h3>
                    ) : (
                        slide
                    )}
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;