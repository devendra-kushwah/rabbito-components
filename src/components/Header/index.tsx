"use client"
import React, { useState } from 'react';
import { Menu, Button, Col, Space, Drawer, Flex } from 'antd';
import {
    MailOutlined,
    ClockCircleOutlined,
    FacebookFilled,
    TwitterSquareFilled,
    LinkedinFilled,
    SkypeFilled,
    SearchOutlined,
    EnvironmentOutlined,
    MenuOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import {
    BlueTopBar,
    BlueTopBarRow,
    MainHeaderWrapper,
    LogoBox,
    BrandTitle,
    BrandSubtitle,
    InfoBlock,
    InfoBlockTitle,
    InfoBlockSub,
    HeaderWrapper,
    BlackNavBarRow,
    WelcomeText,
    SocialIconLink,
    BookNowButton,
    LogoRow,
    LogoImage,
    BrandTitleHighlight,
    MainHeaderColLeft,
    MainHeaderColRight,
    SearchButton,
    MenuStyled
} from './header.style';
import navItems, { type NavItemDef } from './navItems';
import type { MenuProps } from 'antd';
import { HEADER_CONTENT } from '@/utils';
import { usePathname } from 'next/navigation';
import { HeaderLogo, SocialLinks, Map } from "@/components";
import Image from 'next/image';


const MainHeader: React.FC = () => {
    const pathname = usePathname();
    const [selectedKey, setSelectedKey] = useState<string>('home');
    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

    // Convert navItems into the shape expected by antd Menu once
    const menuItems: MenuProps['items'] = navItems.map((it) => ({
        key: it.key,
        label: it.label,
        icon: it.icon,
    }));

    const handleMenuClick = ({ key }: { key: string }) => {
        setSelectedKey(key);
    };

    // Sync selected key with current pathname on render
    const activeKeyFromPath = React.useMemo(() => {
        const match = (navItems as NavItemDef[]).find(item => item.path === pathname);
        return match ? match.key : 'home';
    }, [pathname]);

    React.useEffect(() => {
        setSelectedKey(activeKeyFromPath);
    }, [activeKeyFromPath]);
    // const selectedKey = getSelectedKey();

    // Mobile menu button
    const showDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);

    return (

        <HeaderWrapper className="dropout-header relative">
            <BlueTopBar className='top-bar max-w-[1400px] mx-auto'>
                <BlueTopBarRow className='h-[50px] max-w-[900px] flex items-center ml-auto relative'>
                    <Col flex="auto">
                        <WelcomeText className='marquee-inner'>
                            {HEADER_CONTENT.WELCOME_MESSAGE}
                        </WelcomeText>
                    </Col>
                    <Col>
                        <SocialLinks className='hidden md:flex' />
                    </Col>
                    <Col className='book-now-button'>
                        <BookNowButton as={Button}>
                            {HEADER_CONTENT.BOOK_NOW_TEXT}
                        </BookNowButton>
                    </Col>
                </BlueTopBarRow>
            </BlueTopBar>
            <MainHeaderWrapper className='max-w-[1400px] mx-auto flex justify-center md:justify-between'>

                <MainHeaderColLeft flex="none" className='md:pt-8'>
                    <LogoRow href="/" className='py-4 block md:p-0'>
                        <LogoImage className='block' src={HEADER_CONTENT.LOGO_SRC} alt={HEADER_CONTENT.LOGO_ALT} />
                        {/* <div>
                            <BrandTitle className='text-[20px] md:text-[30] lg:text-[35px] font-bold'>
                                {HEADER_CONTENT.BRAND_TITLE}
                                <BrandTitleHighlight color={HEADER_CONTENT.BRAND_TITLE_HIGHLIGHT_COLOR}>
                                    {HEADER_CONTENT.BRAND_TITLE_HIGHLIGHT}
                                </BrandTitleHighlight>
                            </BrandTitle>
                            <BrandSubtitle>
                                {HEADER_CONTENT.BRAND_SUBTITLE}
                            </BrandSubtitle>
                        </div> */}
                    </LogoRow>
                </MainHeaderColLeft>

                <MainHeaderColRight className='flex content-center justify-end'>
                    <Space size={40}>
                        <InfoBlock className='flex'>
                            <EnvironmentOutlined style={{ fontSize: 22, color: '#222' }} />
                            <div>
                                <InfoBlockTitle>{HEADER_CONTENT.ADDRESS_TITLE}</InfoBlockTitle>
                                <InfoBlockSub>{HEADER_CONTENT.ADDRESS_SUB}</InfoBlockSub>
                            </div>
                        </InfoBlock>
                        <InfoBlock className='flex'>
                            <MailOutlined style={{ fontSize: 22, color: '#222' }} />
                            <div>
                                <InfoBlockTitle>{HEADER_CONTENT.EMAIL_TITLE}</InfoBlockTitle>
                                <InfoBlockSub>{HEADER_CONTENT.EMAIL_SUB}</InfoBlockSub>
                            </div>
                        </InfoBlock>
                        <InfoBlock className='flex'>
                            <ClockCircleOutlined style={{ fontSize: 22, color: '#222' }} />
                            <div>
                                <InfoBlockTitle>{HEADER_CONTENT.WORKING_HOURS_TITLE}</InfoBlockTitle>
                                <InfoBlockSub>{HEADER_CONTENT.WORKING_HOURS_SUB}</InfoBlockSub>
                            </div>
                        </InfoBlock>
                    </Space>
                </MainHeaderColRight>

            </MainHeaderWrapper>

            <BlackNavBarRow className='max-w-[1400px] mx-auto'>
                <div className="nav-row h-[50px] flex content-center relative max-w-[900px] ml-auto">
                    {/* Mobile menu button */}
                    <Button className="menu-icon md:hidden text-blue-950 h-auto" type="text" icon={<MenuOutlined />} onClick={showDrawer} />
                    <Col flex="auto" className='hidden md:block'>
                        <MenuStyled
                            mode="horizontal"
                            theme="dark"
                            selectedKeys={[selectedKey]}
                            items={menuItems}
                            onClick={({ key }) => setSelectedKey(key as string)}
                        />
                    </Col>
                    <InfoBlock className='flex ml-auto md:hidden'>
                        <ClockCircleOutlined style={{ fontSize: 18, color: '#888' }} />
                        <InfoBlockSub>{HEADER_CONTENT.WORKING_HOURS_SUB}</InfoBlockSub>
                    </InfoBlock>
                    <SocialLinks className='flex pr-4 md:p-0 ml-auto md:m-0 md:hidden' color='#fff' />
                    {/* <Col flex="none">
                        <SearchButton icon={<SearchOutlined />} />
                    </Col> */}
                </div>

                {/* Mobile drawer menu */}
                <Drawer
                    title={<HeaderLogo />}
                    placement="left"
                    onClose={closeDrawer}
                    closable={{ placement: 'end' }}
                    open={drawerVisible}
                    className="md:hidden"
                >
                    <div className="flex flex-col h-full justify-between">
                        <Menu
                            mode="vertical"
                            selectedKeys={[selectedKey]}
                            items={menuItems}
                            onClick={(info) => {
                                handleMenuClick(info);
                                closeDrawer();
                            }}
                        />
                        <div>
                            <h3 className="relative uppercase">CONTECT INFO </h3>
                            <address>
                                <div className="address-line mb-4">
                                    <span className="address-label secondary-color barlow-medium block">Phone : </span>
                                    <a className="primary-color" href="callto:+918727073012">+91 8727073012 </a>
                                </div>
                                <div className="address-line mb-4">
                                    <span className="address-label secondary-color barlow-medium block">Email : </span>
                                    <a className="primary-color" href="mailto:dropoutcarcare@gmail.com">dropoutcarcare@gmail.com</a>
                                </div>
                                <div className="address-line mb-4">
                                    <span className="address-label secondary-color barlow-medium block">Address : </span>
                                    Ithera Market, Opp- Gaur world smart street,
                                    <br /> Grater Noida West, Uttar Pradesh, India
                                </div>
                            </address>
                            <Map />
                        </div>
                    </div>
                </Drawer>
            </BlackNavBarRow>

        </HeaderWrapper>
    );
};

export default MainHeader;
