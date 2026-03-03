"use client";
import React from 'react';
import Image from 'next/image';
import {
    BannerWrapper,
    BannerOverlay,
    BannerContent,
    PageTitle,
    Subtitle,
    BannerImage
} from './style';

interface PageBannerProps {
    title: string;
    subtitle?: string;
    backgroundImage?: {
        src: string;
        alt: string;
    };
    height?: number;
}

const PageBanner: React.FC<PageBannerProps> = ({
    title,
    subtitle,
    backgroundImage,
    height = 300
}) => {
    return (
        <BannerWrapper style={{ height: `${height}px` }}>
            {backgroundImage && (
                <BannerImage
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    width={1920}
                    height={height}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
            )}
            <BannerOverlay />
            <BannerContent>
                <PageTitle>{title}</PageTitle>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </BannerContent>
        </BannerWrapper>
    );
};

export default PageBanner;
