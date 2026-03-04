/**
 * Basic reusable Video component
 *
 * Usage example:
 *
 * import Video from 'src/shared-components/Video';
 *
 * <Video
 *   src="/videos/demo.mp4"
 *   poster="/page-banner/preview.jpg"
 *   controls
 *   width={800}
 *   height={450}
 *   className="rounded-lg"
 * />
 */

"use client";
import React from 'react';

export type VideoProps = {
    src: string;
    poster?: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
    // Simple event handlers
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
};

const Video: React.FC<VideoProps> = ({
    src,
    poster,
    controls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    width,
    height,
    className,
    style,
    onPlay,
    onPause,
    onEnded,
}) => {
    const videoProps: React.VideoHTMLAttributes<HTMLVideoElement> = {
        src,
        poster,
        controls,
        autoPlay,
        loop,
        muted,
        onPlay: onPlay ? () => onPlay() : undefined,
        onPause: onPause ? () => onPause() : undefined,
        onEnded: onEnded ? () => onEnded() : undefined,
    };

    const sizeStyle: React.CSSProperties = {};
    if (width) sizeStyle.width = typeof width === 'number' ? `${width}px` : width;
    if (height) sizeStyle.height = typeof height === 'number' ? `${height}px` : height;

    return (
        <div className={className} style={style}>
            <video {...videoProps} style={{ display: 'block', maxWidth: '100%', ...sizeStyle }}>
                <source src={src} />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;
