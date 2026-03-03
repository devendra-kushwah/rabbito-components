import styled from 'styled-components';
import { Card } from 'antd'

export const StyledCard = styled(Card) <{ spacing?: string, background?: string }>`
    padding: ${({ spacing }) => spacing || ""};
    background: ${({ background }) => background || "#fff"};
    .ant-card-body {
        padding: 15px;
        overflow: hidden;
    }
`;

