import styled from 'styled-components';
import Link from 'next/link';
import { Layout, Col, Button, Menu, Row } from 'antd';
import { media } from '@/styles/breakpoints';

export const BlueTopBar = styled.div`
  color: #fff;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 50px;
    background: #1766b5;
    z-index: 0;
  }
`;

export const BlueTopBarRow = styled(Row)`
  background: #1766b5;
  z-index: 1;
    .book-now-button {
      display: none;
      ${media.min('md')} {
      display: block
    }
  }
  &:before {
    bottom: 0;
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    z-index: 3;
    border: 25px solid #1766b5;
    border-left: 25px solid;
    border-bottom: 25px solid;
    z-index: 2;
  }
`;

export const MainHeaderWrapper = styled.div`
  background: #fff;
`;


export const LogoBox = styled.div`
  width: 54px;
  height: 54px;
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

export const BrandTitle = styled.h1`
  color: #222;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;

`;

export const BrandSubtitle = styled.div`
  font-size: 14px;
  color: #999;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const InfoBlock = styled.div`
  /* display: flex; */
  align-items: center;
  gap: 10px;
`;

export const InfoBlockTitle = styled.div`
  color: #222;
  font-size: 15px;
  font-weight: bold;
`;

export const InfoBlockSub = styled.div`
  color: #888;
  font-size: 14px;
`;

export const HeaderWrapper = styled(Layout.Header)`
  background: #fff !important;
  padding: 0;
  box-shadow: none;
  height: auto;
`;

export const BlackNavBarRow = styled.nav`
.nav-row {
    z-index: 1;
    background: #222 !important;
     &::before {
      bottom: 0;
      content: "";
      position: absolute;
      left: -50px;
      top: 0;
      z-index: 3;
      border: 25px solid #222;
      border-left: 25px solid transparent;
      border-top: 25px solid transparent;
    }
    .menu-icon {
     color: #fff;
     height: auto;
     display: none;
     ${media.max('md')} {
       display: block;
       font-size: 20px;
     }
    }
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 50px;
    background: #222;
    z-index: 0;
  }
`;

export const WelcomeText = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 24px;
`;

export const SocialIconLink = styled.a`
  color: #ffffffa6 !important;
`;

export const BookNowButton = styled.button`
  background: #222;
  color: #fff;
  border: none;
  font-weight: 700;
  margin-left: 24px;
  height: 50px;
  border-radius: 0;
  padding: 0 32px;
`;

export const LogoRow = styled(Link)`
   
`;

export const LogoImage = styled.img`
  height: 50px;
  object-fit: contain;
    ${media.min('md')} {
      height: 90px;
    }
`;

export const BrandTitleHighlight = styled.span`
  color: ${(props) => props.color || '#1766b5'};
`;

export const MainHeaderColLeft = styled(Col)`
      
`;

export const MainHeaderColRight = styled(Col)`
  gap: 40px;
  padding-right: 32px;
  ${media.max('md')} {
      display: none;
    }
`;

export const SearchButton = styled(Button)`
  color: #fff;
  border: 1px dashed #1766b5;
  background: transparent;
`;

export const MenuStyled = styled(Menu)`
  background: transparent;
  border: none;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 50px;
  li.ant-menu-item {
  color: #ffffffa6 !important;
  &:after, &:hover:after {
    content: none
  }
  &.ant-menu-item-selected {
    &:after {
      content: none
    }
    * {
      color:  #5daeff;
    }
  }
  }
`; 