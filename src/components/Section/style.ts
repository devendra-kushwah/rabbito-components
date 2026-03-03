import styled from 'styled-components';
import { media } from '@/theme/styles/breakpoints';

export const StyledSection = styled.section<{ spacing?: string, background?: string }>`
    padding: ${({ spacing }) => spacing || ""};
    background: ${({ background }) => background || "#fff"};
`;

export const SectionTitle = styled.h2<{ align?: string, }>`
    font-size: 3rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
    margin: 0 0 16px;
    text-align: ${({ align }) => align || 'left'};
      ${media.min('md')} {
        font-size: 4rem;
    }
`;