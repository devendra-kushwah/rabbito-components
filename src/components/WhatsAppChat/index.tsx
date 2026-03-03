"use client";
import React from 'react';
import styled from 'styled-components';
import { FloatButton, Tooltip } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

interface WhatsAppChatProps {
    phoneNumber?: string;
    message?: string;
    position?: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft';
    tooltip?: string;
}

const StyledFloatButton = styled(FloatButton)`
    &.ant-float-button {
        .ant-float-button-body {
            background-color: #25d366;
            .ant-float-button-icon {
                color: white;
                font-size: 24px;
            }
            &:hover {
                background-color: #128C7E;
            }
        }
    }
`;

const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
    phoneNumber = "+918727073012",
    message = "Hello! I'm interested in your services.",
    position = 'bottomRight',
    tooltip = 'Chat with us now!'
}) => {
    const handleClick = () => {
        // Remove any non-numeric characters from phone number
        const cleanNumber = phoneNumber.replace(/\D/g, '');
        // Create WhatsApp URL with phone number and message
        const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Tooltip title={tooltip} placement="left">
            <StyledFloatButton
                icon={<WhatsAppOutlined />}
                onClick={handleClick}
                type="primary"
                style={{
                    width: 60,
                    height: 60,
                }}
                tooltip={false}
                {...(position && { position })}
            />
        </Tooltip>
    );
};

export default WhatsAppChat;