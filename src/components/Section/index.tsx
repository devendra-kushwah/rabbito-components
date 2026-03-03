"use client";
import React from 'react';
import { StyledSection, SectionTitle } from './style';

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    titleAlign?: 'left' | 'center' | 'right';
    fluid?: boolean;
}

const Section: React.FC<SectionProps> = ({
    title,
    children,
    className,
    titleAlign = 'center',
    fluid = false,
}) => {
    return (
        <StyledSection className={className}>
            <div className={fluid ? 'max-w-[1400px] mx-auto' : ''}>
                {title && <SectionTitle align={titleAlign}>{title}</SectionTitle>}
                {children}
            </div>
        </StyledSection>
    );
};

export default Section;
