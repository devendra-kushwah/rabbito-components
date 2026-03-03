"use client"
import React, { useState } from 'react';
import { Layout, Menu, Button, Avatar, Dropdown, Space, Typography } from 'antd';
import {
    HomeOutlined,
    CarOutlined,
    ToolOutlined,
    PictureOutlined,
    PhoneOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    SafetyCertificateOutlined,
    ExperimentOutlined,
    ScissorOutlined,
    CameraOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const { Header } = Layout;
const { Title } = Typography;

const MainHeader: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState('home');

    const navigationItems = [
        {
            key: 'home',
            label: <Link href="/">Home</Link>,
            icon: <HomeOutlined />
        },
        {
            key: 'bodyshop',
            label: <Link href="/bodyshop">Body Shop</Link>,
            icon: <CarOutlined />
        },
        {
            key: 'paint-protection',
            label: <Link href="/paint-protections">Paint Protection</Link>,
            icon: <SafetyCertificateOutlined />
        },
        {
            key: 'ceramic-coating',
            label: <Link href="/ceramic-coating">Ceramic Coating</Link>,
            icon: <ExperimentOutlined />
        },
        {
            key: 'graphene-coating',
            label: <Link href="/grephene-coating">Graphene Coating</Link>,
            icon: <ExperimentOutlined />
        },
        {
            key: 'dry-cleaning',
            label: <Link href="/dry-cleaning">Dry Cleaning</Link>,
            icon: <ScissorOutlined />
        },
        {
            key: 'gallery',
            label: <Link href="/gallery">Gallery</Link>,
            icon: <CameraOutlined />
        }
    ];

    const userMenuItems = [
        {
            key: 'profile',
            label: 'Profile',
            icon: <UserOutlined />
        },
        {
            key: 'settings',
            label: 'Settings',
            icon: <SettingOutlined />
        },
        {
            type: 'divider' as const
        },
        {
            key: 'logout',
            label: 'Logout',
            icon: <LogoutOutlined />
        }
    ];

    const handleMenuClick = ({ key }: { key: string }) => {
        setSelectedKey(key);
    };

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '0 24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
        >
            {/* Logo and Brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                    style={{
                        width: '40px',
                        height: '40px',
                        background: 'white',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <CarOutlined style={{ fontSize: '24px', color: '#667eea' }} />
                </div>
                <Title
                    level={4}
                    style={{
                        color: 'white',
                        margin: 0,
                        fontWeight: 'bold'
                    }}
                >
                    DCC Auto Care
                </Title>
            </div>

            {/* Navigation Menu */}
            <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[selectedKey]}
                items={navigationItems}
                onClick={handleMenuClick}
                style={{
                    flex: 1,
                    minWidth: 0,
                    background: 'transparent',
                    border: 'none',
                    marginLeft: '48px'
                }}
            />

            {/* Contact and User Actions */}
            <Space size="middle">
                <Button
                    type="primary"
                    icon={<PhoneOutlined />}
                    style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: 'white'
                    }}
                >
                    Contact Us
                </Button>

                <Dropdown
                    menu={{ items: userMenuItems }}
                    placement="bottomRight"
                    trigger={['click']}
                >
                    <Avatar
                        icon={<UserOutlined />}
                        style={{
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.2)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}
                    />
                </Dropdown>
            </Space>
        </Header>
    );
};

export default MainHeader;
