"use client";
import React from 'react';
import { Typography, Col, Row } from 'antd';
import Image from 'next/image';
import { StyledCard } from './style';

interface DetailedCardProps {
    title?: string;
    subTitle?: string;
    description?: string;
    image?: {
        src: string;
        alt?: string;
        width?: number;
        height: number; // Height is required for Next.js Image
    };
}

const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: '300px',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '8px'
};

const imgStyle: React.CSSProperties = {
    objectFit: 'cover',
};


const defaultImage = {
    src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    width: 273,
    height: 273 // Using square aspect ratio for default
}

const DetailedCard: React.FC<DetailedCardProps> = ({
    title,
    subTitle,
    description,
    image
}) => (
    <StyledCard className='p-0'>
        <Row gutter={[0, 0]}>
            <Col xs={24} sm={24} md={10} style={{ height: '100%' }}>
                <div style={imageContainerStyle}>
                    <Image
                        src={image?.src || defaultImage.src}
                        alt={image?.alt || "Information card image"}
                        fill
                        priority
                        style={imgStyle}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
                <div style={{ padding: 24 }}>
                    {subTitle && (
                        <Typography.Title level={4}>
                            {subTitle}
                        </Typography.Title>
                    )}
                    {title && (
                        <Typography.Title level={3}>
                            {title}
                        </Typography.Title>
                    )}
                    {description && (
                        <Typography.Paragraph>
                            {description}
                        </Typography.Paragraph>
                    )}
                </div>
            </Col>
        </Row>
    </StyledCard>
);

export default DetailedCard;