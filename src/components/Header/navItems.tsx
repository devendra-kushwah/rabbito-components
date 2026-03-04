"use client";

import {
    HomeOutlined,
    CarOutlined,
    SafetyCertificateOutlined,
    ExperimentOutlined,
    ScissorOutlined,
    CameraOutlined
} from '@ant-design/icons';
import Link from 'next/link';

export interface NavItemDef {
    key: string;
    path: string; // route path used for active detection
    label: React.ReactNode;
    icon?: React.ReactNode;
}

const navItems: NavItemDef[] = [
    {
        key: 'home',
        path: '/',
        label: <Link href="/">Home</Link>,
        icon: <HomeOutlined />
    },
    {
        key: 'bodyshop',
        path: '/bodyshop',
        label: <Link href="/bodyshop">Body Shop</Link>,
        icon: <CarOutlined />
    },
    {
        key: 'paint-protection',
        path: '/paint-protections',
        label: <Link href="/paint-protections">Detailing & Paint Protection</Link>,
        icon: <SafetyCertificateOutlined />
    },
    // {
    //     key: 'coatings',
    //     label: <Link href="/coatings">Coatings</Link>,
    //     icon: <ExperimentOutlined />
    // },
    // {
    //     key: 'ceramic-coating',
    //     label: <Link href="/ceramic-coating">Ceramic Coating</Link>,
    //     icon: <ExperimentOutlined />
    // },
    // {
    //     key: 'graphene-coating',
    //     label: <Link href="/grephene-coating">Graphene Coating</Link>,
    //     icon: <ExperimentOutlined />
    // },
    // {
    //     key: 'dry-cleaning',
    //     label: <Link href="/dry-cleaning">Dry Cleaning</Link>,
    //     icon: <ScissorOutlined />
    // },
    // {
    //     key: 'gallery',
    //     label: <Link href="/gallery">Gallery</Link>,
    //     icon: <CameraOutlined />
    // }
];

export default navItems;


