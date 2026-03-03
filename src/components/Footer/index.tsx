"use client";
import React from "react";
import { Row, Col } from 'antd';
import Link from "next/link";
import { FooterWrapper } from "./style";
import { FooterLogo, SocialLinks, WhatsAppChat } from "@/shared-components";
import { carServices } from '@/utils/cms/carServices';

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <div className="max-w-[1400px] mx-auto px-4">
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={9}>
                        <figure className="dropout-car-care footer-logo mb-8">
                            <FooterLogo />
                        </figure>
                        <div className="md:pr-16">
                            <p className="mb-4">
                                At <strong className="primary-color">Dropout Car Care</strong>, we are your complete car care specialists — dedicated to keeping your vehicle looking flawless and protected for years.
                            </p>
                            <p className="mb-4">
                                We offer a wide range of premium automotive services, including <strong className="primary-color">Paint Protection Film (PPF), Ceramic & Graphene Coatings, Professional Detailing, Denting & Painting</strong>, and <strong className="primary-color">Insurance Claim Assistance.</strong>
                            </p>
                            <p className="mb-4">
                                From <strong className="primary-color">bodyshop repairs  and panel painting to paint protection and restoration </strong>, our expert team ensures every vehicle receives unmatched precision, passion, and perfection.
                            </p>
                            <p>
                                Our team is trained to handle every vehicle with care, using <strong className="primary-color">international-grade products, advanced tools, and high-quality materials </strong> that ensure showroom-like perfection every time.
                            </p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={5}>
                        <h3 className="relative uppercase"> Services Menu </h3>
                        <ul>
                            {carServices.map((cat, i) => (
                                <li className="mb-4" key={i}>
                                    <Link href="#">{cat.category}</Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col xs={24} sm={12} md={5}>
                        <h3 className="relative uppercase">CONTECT INFO </h3>
                        <address>
                            <div className="address-line mb-4">
                                <span className="address-label secondary-color barlow-medium block">Phone : </span>
                                <a className="primary-color" href="callto:+918727073012">+91 8727073012 </a>
                            </div>
                            <div className="address-line mb-4">
                                <span className="address-label secondary-color barlow-medium block">Email : </span>
                                <a className="primary-color" href="mailto:care@dropoutcarcare.com">care@dropoutcarcare.com</a>
                            </div>
                            <div className="address-line mb-4">
                                <span className="address-label secondary-color barlow-medium block">Address : </span>
                                Ithera Market, Opp- Gaur world smart street,
                                <br /> Grater Noida West, Uttar Pradesh, India
                            </div>
                        </address>
                    </Col>
                    <Col xs={24} sm={12} md={5}>
                        <h3 className="relative uppercase">Follow Us</h3>
                        <SocialLinks />
                    </Col>
                </Row>
                <p className="copy-right-section pt-6 text-center">&copy; {new Date().getFullYear()} Dropout Car Care. All rights reserved.</p>
            </div>
            {/* WhatsApp Chat Button */}
            <WhatsAppChat />
        </FooterWrapper>
    );
};

export default Footer;
