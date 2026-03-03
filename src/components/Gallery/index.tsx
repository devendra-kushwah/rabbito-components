"use client"
/**
 * Gallery - simple reusable image grid
 *
 * Usage example:
 *
 * import Gallery from 'src/shared-components/Gallery';
 *
 * const images = [
 *   { src: '/slider/photo1.jpg', alt: 'Photo 1' },
 *   { src: '/slider/photo2.jpg', alt: 'Photo 2' },
 *   // ...
 * ];
 *
 * <Gallery images={images} columns={3} gap={12} onImageClick={(img) => console.log(img)} />
 */

import React from 'react';
import { Image as AntImage } from 'antd';

export type GalleryImage = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
};

export type GalleryProps = {
    images: GalleryImage[];
    columns?: number; // number of columns in the grid
    gap?: number; // gap in pixels
    className?: string;
    style?: React.CSSProperties;
    onImageClick?: (img: GalleryImage, index: number) => void;
};

const Gallery: React.FC<GalleryProps> = ({
    images,
    columns = 3,
    gap = 8,
    className,
    style,
    onImageClick,
}) => {
    const gridStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: `${gap}px`,
        alignItems: 'start',
        width: '100%',
        ...style,
    };

    return (
        <div className={className} style={gridStyle}>
            {images && images.map((img, idx) => (
                <button
                    key={idx}
                    onClick={() => onImageClick && onImageClick(img, idx)}
                    style={{ border: 'none', padding: 0, background: 'transparent', cursor: onImageClick ? 'pointer' : 'default' }}
                    aria-label={img.alt || `Image ${idx + 1}`}
                >
                    <AntImage
                        src={img.src}
                        alt={img.alt || ''}
                        width={img.width}
                        height={img.height}
                        preview={false}
                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    />
                </button>
            ))}
        </div>
    );
};

export default Gallery;
