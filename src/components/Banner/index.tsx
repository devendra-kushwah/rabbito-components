import React from 'react';
import Image from 'next/image';

interface BannerProps {
    title?: string;
    subtitle?: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    className?: string;
    children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    imageWidth = 400,
    imageHeight = 300,
    className = '',
    children
}) => {
    return (
        <div className={`banner-container flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg shadow-lg ${className}`}>
            <div className="banner-image-container flex-shrink-0">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    className="rounded-lg shadow-md object-cover"
                    priority
                />
            </div>

            <div className="banner-content flex flex-col gap-4 text-center md:text-left">
                {title && (
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        {title}
                    </h2>
                )}

                {subtitle && (
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        {subtitle}
                    </p>
                )}

                {children && (
                    <div className="banner-children">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Banner; 