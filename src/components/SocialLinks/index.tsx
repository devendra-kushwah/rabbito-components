"use client";
import React from 'react';
import { FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import { SocialList, SocialLink } from './style';

type LinkItem = {
    href: string;
    label: string;
    Icon: React.ComponentType<any>;
};

const socialLinks: LinkItem[] = [
    { href: 'https://www.instagram.com/dropoutcarcare/?hl=en', label: 'Instagram', Icon: InstagramFilled },
    { href: 'https://www.youtube.com/@dropoutcarcare', label: 'YouTube', Icon: YoutubeFilled },
    { href: 'https://www.facebook.com/people/Dropout-Car-Care/61572302514257/', label: 'Facebook', Icon: FacebookFilled },
];

export type SocialLinksProps = {
    size?: number; // icon font-size in pixels
    color?: string; // icon color
    className?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ size = 20, color = '', className = '' }) => {
    return (
        <SocialList className={`md:flex ${className}`}>
            {socialLinks.map((s) => (
                <SocialLink key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label} size={size} color={color}>
                    <s.Icon />
                </SocialLink>
            ))}
        </SocialList>
    );
};

export default SocialLinks;
