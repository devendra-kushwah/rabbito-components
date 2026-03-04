"use client";
import React from 'react';
import { Alert } from 'antd';

interface BannerProps {
    message: string;
    description?: string;
    type?: 'success' | 'info' | 'warning' | 'error';
    showIcon?: boolean;
}

const AlertBanner: React.FC<BannerProps> = ({ message, description, type = 'info', showIcon = true }) => {
    return (
        <Alert
            message={message}
            description={description}
            type={type}
            showIcon={showIcon}
            banner
            style={{ width: '100%' }}
        />
    );
};

export default AlertBanner;
