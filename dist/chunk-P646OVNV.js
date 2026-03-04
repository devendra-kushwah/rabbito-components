"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/components/AlertBanner/index.tsx
var _antd = require('antd');
var _jsxruntime = require('react/jsx-runtime');
var AlertBanner = ({ message, description, type = "info", showIcon = true }) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _antd.Alert,
    {
      message,
      description,
      type,
      showIcon,
      banner: true,
      style: { width: "100%" }
    }
  );
};
var AlertBanner_default = AlertBanner;

// src/components/Header/index.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);






var _icons = require('@ant-design/icons');

// src/components/Header/header.style.ts
var _styledcomponents = require('styled-components'); var _styledcomponents2 = _interopRequireDefault(_styledcomponents);
var _link = require('next/link'); var _link2 = _interopRequireDefault(_link);


// src/styles/breakpoints.ts
var breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280
};
var media = {
  min: (bp) => `@media (min-width: ${breakpoints[bp]}px)`,
  max: (bp) => `@media (max-width: ${breakpoints[bp] - 1}px)`
};

// src/components/Header/header.style.ts
var BlueTopBar = _styledcomponents2.default.div`
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
var BlueTopBarRow = _styledcomponents2.default.call(void 0, _antd.Row)`
  background: #1766b5;
  z-index: 1;
    .book-now-button {
      display: none;
      ${media.min("md")} {
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
var MainHeaderWrapper = _styledcomponents2.default.div`
  background: #fff;
`;
var LogoBox = _styledcomponents2.default.div`
  width: 54px;
  height: 54px;
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;
var BrandTitle = _styledcomponents2.default.h1`
  color: #222;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1px;

`;
var BrandSubtitle = _styledcomponents2.default.div`
  font-size: 14px;
  color: #999;
  font-weight: 500;
  letter-spacing: 1px;
`;
var InfoBlock = _styledcomponents2.default.div`
  /* display: flex; */
  align-items: center;
  gap: 10px;
`;
var InfoBlockTitle = _styledcomponents2.default.div`
  color: #222;
  font-size: 15px;
  font-weight: bold;
`;
var InfoBlockSub = _styledcomponents2.default.div`
  color: #888;
  font-size: 14px;
`;
var HeaderWrapper = _styledcomponents2.default.call(void 0, _antd.Layout.Header)`
  background: #fff !important;
  padding: 0;
  box-shadow: none;
  height: auto;
`;
var BlackNavBarRow = _styledcomponents2.default.nav`
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
     ${media.max("md")} {
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
var WelcomeText = _styledcomponents2.default.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 24px;
`;
var SocialIconLink = _styledcomponents2.default.a`
  color: #ffffffa6 !important;
`;
var BookNowButton = _styledcomponents2.default.button`
  background: #222;
  color: #fff;
  border: none;
  font-weight: 700;
  margin-left: 24px;
  height: 50px;
  border-radius: 0;
  padding: 0 32px;
`;
var LogoRow = _styledcomponents2.default.call(void 0, _link2.default)`
   
`;
var LogoImage = _styledcomponents2.default.img`
  height: 50px;
  object-fit: contain;
    ${media.min("md")} {
      height: 90px;
    }
`;
var BrandTitleHighlight = _styledcomponents2.default.span`
  color: ${(props) => props.color || "#1766b5"};
`;
var MainHeaderColLeft = _styledcomponents2.default.call(void 0, _antd.Col)`
      
`;
var MainHeaderColRight = _styledcomponents2.default.call(void 0, _antd.Col)`
  gap: 40px;
  padding-right: 32px;
  ${media.max("md")} {
      display: none;
    }
`;
var SearchButton = _styledcomponents2.default.call(void 0, _antd.Button)`
  color: #fff;
  border: 1px dashed #1766b5;
  background: transparent;
`;
var MenuStyled = _styledcomponents2.default.call(void 0, _antd.Menu)`
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

// src/components/Header/navItems.tsx







var navItems = [
  {
    key: "home",
    path: "/",
    label: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: "/", children: "Home" }),
    icon: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _icons.HomeOutlined, {})
  },
  {
    key: "bodyshop",
    path: "/bodyshop",
    label: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: "/bodyshop", children: "Body Shop" }),
    icon: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _icons.CarOutlined, {})
  },
  {
    key: "paint-protection",
    path: "/paint-protections",
    label: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: "/paint-protections", children: "Detailing & Paint Protection" }),
    icon: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _icons.SafetyCertificateOutlined, {})
  }
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
var navItems_default = navItems;

// src/utils/constants/header.ts
var HEADER_CONTENT = {
  WELCOME_MESSAGE: "We don\u2019t just care about cars, we restore their soul.",
  SOCIAL_LINKS: [
    { href: "#", icon: "FacebookFilled" },
    { href: "#", icon: "TwitterSquareFilled" },
    { href: "#", icon: "LinkedinFilled" },
    { href: "#", icon: "SkypeFilled" }
  ],
  BOOK_NOW_TEXT: "BOOK NOW",
  LOGO_SRC: "/dropout-car-care-black-blue.png",
  LOGO_ALT: "Motor Expert",
  //   BRAND_TITLE: "Automotive ",
  BRAND_TITLE: "Dropout ",
  //   BRAND_TITLE_HIGHLIGHT: "Expert",
  BRAND_TITLE_HIGHLIGHT: "Car Care",
  BRAND_TITLE_HIGHLIGHT_COLOR: "#1766b5",
  BRAND_SUBTITLE: "= EXPERTS IN AUTO REPAIR SERVICE",
  ADDRESS_TITLE: "Iteda Market, Noida Extension,",
  ADDRESS_SUB: "201318, Gautam budh nagar, U.P, ",
  EMAIL_TITLE: "Send your mail at",
  EMAIL_SUB: "care@dropoutcarcare.com",
  WORKING_HOURS_TITLE: "Working Hours",
  WORKING_HOURS_SUB: "Mon-Sun: 9.30am - 8.00pm"
};

// src/components/Header/index.tsx
var _navigation = require('next/navigation');

// src/components/Banner/index.tsx
var _image = require('next/image'); var _image2 = _interopRequireDefault(_image);

var Banner = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageWidth = 400,
  imageHeight = 300,
  className = "",
  children
}) => {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: `banner-container flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg shadow-lg ${className}`, children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "banner-image-container flex-shrink-0", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      _image2.default,
      {
        src: imageSrc,
        alt: imageAlt,
        width: imageWidth,
        height: imageHeight,
        className: "rounded-lg shadow-md object-cover",
        priority: true
      }
    ) }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "banner-content flex flex-col gap-4 text-center md:text-left", children: [
      title && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h2", { className: "text-3xl md:text-4xl font-bold text-gray-800 leading-tight", children: title }),
      subtitle && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-lg md:text-xl text-gray-600 leading-relaxed", children: subtitle }),
      children && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "banner-children", children })
    ] })
  ] });
};
var Banner_default = Banner;

// src/components/Slider/index.tsx


var contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};
var defaultSlides = [
  "Welcome to Automotive Expert!",
  /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h2", { style: { color: "#fff", margin: 0 }, children: "Quality Car Care" }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { style: { color: "#fff", margin: 0 }, children: "Professional service for your vehicle" })
  ] }),
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "img", { src: "/next.svg", alt: "Automotive", style: { width: "100%", height: 160, objectFit: "contain", background: "#364d79" } })
];
var Slider = ({ slides, infinite = true, autoplaySpeed = 1e3, autoplay }) => {
  const data = slides && slides.length > 0 ? slides : defaultSlides;
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Carousel, { arrows: true, autoplaySpeed, infinite, autoplay, children: data.map((slide, idx) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { children: typeof slide === "string" ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { style: contentStyle, children: slide }) : slide }, idx)) });
};
var Slider_default = Slider;

// src/components/Footer/index.tsx



// src/components/Footer/style.ts

var FooterWrapper = _styledcomponents2.default.footer`
  width: 100%;
  padding: 40px 0;
  background: #000;
  color: #fff;
  a {
      color: #fff;
   }
  h3 {
    font-size: 20px;
    margin-bottom: 16px;
    padding-bottom: 10px;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      /* background: #ffbd59; */
      background: #38b6ff;
      width: 80%;
      border-radius: 2px;
    }
  }
  .copy-right-section {
    font-size: 12px;
    padding: 25px 0 0;
    color: #a4a4a4;
  }
`;
var FooterText = _styledcomponents2.default.p`
  margin: 0;
  font-size: 16px;
`;

// src/utils/cms/carServices.ts
var carServices = [
  {
    category: "Car Detailing & Cleaning",
    services: [
      { name: "Exterior Foam Wash", price: 799 },
      { name: "Interior Deep Cleaning", price: 1899 },
      { name: "Rubbing & Polishing", price: 3499 },
      { name: "Ceramic Coating", price: 9999 },
      { name: "Graphene Coating", price: 12999 },
      { name: "PPF (Paint Protection Film) - Gloss / Matte / Transparent", price: "On Request" },
      { name: "Glass Coating", price: 2e3 },
      { name: "Alloy Dressing", price: 899 },
      { name: "Chrome Cleaning", price: 599 },
      { name: "AC Vent Cleaning", price: 799 },
      { name: "Engine Bay Cleaning", price: 999 },
      { name: "Headlight Restoration", price: 1499 },
      { name: "Odor Removal & Sanitization", price: 999 },
      { name: "Premium Waxing & Sealant Treatment", price: 1999 }
    ]
  },
  {
    category: "Denting & Painting",
    services: [
      { name: "Full Body Painting", price: "On Request" },
      { name: "Panel Painting", price: 2499 },
      { name: "Spot Dent Repair", price: 999 },
      { name: "Scratch Removal", price: 799 },
      { name: "Bumper Repair & Repainting", price: 1999 },
      { name: "Alloy Wheel Painting", price: 1499 },
      { name: "Color Matching & Blending", price: "Included" },
      { name: "Paint Restoration & Correction", price: 2999 },
      { name: "Underbody Coating", price: 2499 },
      { name: "Rust Removal & Protection", price: 1499 }
    ]
  },
  {
    category: "Insurance & Claim Assistance",
    services: [
      { name: "Cashless Insurance Claim Assistance", price: "Free Support" },
      { name: "Doorstep Accident Inspection", price: "Free" },
      { name: "Insurance Paperwork Support", price: "Free" },
      { name: "Claim Estimation & Quotation", price: "Included" },
      { name: "Replacement of Damaged Panels", price: "On Request" },
      { name: "Genuine Spare Parts Replacement", price: "On Request" },
      { name: "Coordination with Insurance Company", price: "Included" },
      { name: "Post-Repair Quality Check", price: "Included" }
    ]
  },
  {
    category: "Packages",
    services: [
      { name: "Premium Detailing Combo", price: 4999 },
      { name: "Ceramic + Interior Combo", price: 6999 },
      { name: "PPF + Polishing Combo", price: 8999 },
      { name: "Full Car Restoration Package", price: 12999 },
      { name: "Maintenance Wash Package", price: 2499 }
    ]
  }
];

// src/components/Footer/index.tsx

var Footer = () => {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FooterWrapper, { children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "max-w-[1400px] mx-auto px-4", children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Row, { gutter: [16, 16], children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Col, { xs: 24, sm: 12, md: 9, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "figure", { className: "dropout-car-care footer-logo mb-8", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, footer_default, {}) }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "md:pr-16", children: [
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "p", { className: "mb-4", children: [
              "At ",
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "strong", { className: "primary-color", children: "Dropout Car Care" }),
              ", we are your complete car care specialists \u2014 dedicated to keeping your vehicle looking flawless and protected for years."
            ] }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "p", { className: "mb-4", children: [
              "We offer a wide range of premium automotive services, including ",
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "strong", { className: "primary-color", children: "Paint Protection Film (PPF), Ceramic & Graphene Coatings, Professional Detailing, Denting & Painting" }),
              ", and ",
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "strong", { className: "primary-color", children: "Insurance Claim Assistance." })
            ] }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "p", { className: "mb-4", children: [
              "From ",
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "strong", { className: "primary-color", children: "bodyshop repairs  and panel painting to paint protection and restoration " }),
              ", our expert team ensures every vehicle receives unmatched precision, passion, and perfection."
            ] }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "p", { children: [
              "Our team is trained to handle every vehicle with care, using ",
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "strong", { className: "primary-color", children: "international-grade products, advanced tools, and high-quality materials " }),
              " that ensure showroom-like perfection every time."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Col, { xs: 24, sm: 12, md: 5, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "relative uppercase", children: " Services Menu " }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "ul", { children: carServices.map((cat, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { className: "mb-4", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _link2.default, { href: "#", children: cat.category }) }, i)) })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Col, { xs: 24, sm: 12, md: 5, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "relative uppercase", children: "CONTECT INFO " }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "address", { children: [
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "address-line mb-4", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "address-label secondary-color barlow-medium block", children: "Phone : " }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { className: "primary-color", href: "callto:+918727073012", children: "+91 8727073012 " })
            ] }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "address-line mb-4", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "address-label secondary-color barlow-medium block", children: "Email : " }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { className: "primary-color", href: "mailto:care@dropoutcarcare.com", children: "care@dropoutcarcare.com" })
            ] }),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "address-line mb-4", children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "address-label secondary-color barlow-medium block", children: "Address : " }),
              "Ithera Market, Opp- Gaur world smart street,",
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "br", {}),
              " Grater Noida West, Uttar Pradesh, India"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Col, { xs: 24, sm: 12, md: 5, children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "relative uppercase", children: "Follow Us" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SocialLinks_default, {})
        ] })
      ] }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "p", { className: "copy-right-section pt-6 text-center", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Dropout Car Care. All rights reserved."
      ] })
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, WhatsAppChat_default, {})
  ] });
};
var Footer_default = Footer;

// src/components/logo/header.tsx

var HeaderLogo = () => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "img", { src: "/dropout-car-care-black-blue.png", width: 300, height: 100, alt: "Dropout car care" });
var header_default = HeaderLogo;

// src/components/logo/footer.tsx

var HeaderLogo2 = () => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _jsxruntime.Fragment, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "img", { src: "/dropout-car-care-white-blue.png", width: 300, height: 100, alt: "Dropout car care" }) });
var footer_default = HeaderLogo2;

// src/components/SocialLinks/index.tsx


// src/components/SocialLinks/style.ts

var SocialList = _styledcomponents2.default.div`
  gap: 12px;
  align-items: center;
`;
var SocialLink = _styledcomponents2.default.a`
  color: ${(p) => p.color || "#fff"};
  font-size: ${(p) => p.size ? `${p.size}px` : "20px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

// src/components/SocialLinks/index.tsx

var socialLinks = [
  { href: "https://www.instagram.com/dropoutcarcare/?hl=en", label: "Instagram", Icon: _icons.InstagramFilled },
  { href: "https://www.youtube.com/@dropoutcarcare", label: "YouTube", Icon: _icons.YoutubeFilled },
  { href: "https://www.facebook.com/people/Dropout-Car-Care/61572302514257/", label: "Facebook", Icon: _icons.FacebookFilled }
];
var SocialLinks = ({ size = 20, color = "", className = "" }) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SocialList, { className: `md:flex ${className}`, children: socialLinks.map((s) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SocialLink, { href: s.href, target: "_blank", rel: "noopener noreferrer", "aria-label": s.label, title: s.label, size, color, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, s.Icon, {}) }, s.href)) });
};
var SocialLinks_default = SocialLinks;

// src/components/Tabs/index.tsx


var SharedTabs = ({ items: items2, defaultActiveKey, centered = false }) => {
  const antdItems = items2.map((it) => ({ key: it.key, label: it.label, children: it.children }));
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Tabs, { items: antdItems, defaultActiveKey, centered });
};
var Tabs_default = SharedTabs;

// src/components/Cards/BaseCard/index.tsx


var Card = _styledcomponents2.default.div`
  background: #fff;
  border-radius: 8px;
  padding: ${({ padding }) => typeof padding === "number" ? `${padding}px` : padding != null ? padding : "16px"};
  box-shadow: ${({ elevation }) => elevation && elevation > 0 ? `0 ${elevation}px ${Math.max(2, elevation * 2)}px rgba(16,24,40,0.08)` : "none"};
  border: ${({ bordered }) => bordered ? "1px solid rgba(0,0,0,0.06)" : "none"};
  display: block;
`;
var BaseCard = ({ children, className, bordered = false, padding, elevation = 4 }) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Card, { className, bordered, padding, elevation, children });
};
var BaseCard_default = BaseCard;

// src/components/WhatsAppChat/index.tsx




var StyledFloatButton = _styledcomponents2.default.call(void 0, _antd.FloatButton)`
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
var WhatsAppChat = ({
  phoneNumber = "+918727073012",
  message = "Hello! I'm interested in your services.",
  position = "bottomRight",
  tooltip = "Chat with us now!"
}) => {
  const handleClick = () => {
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Tooltip, { title: tooltip, placement: "left", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    StyledFloatButton,
    __spreadValues({
      icon: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _icons.WhatsAppOutlined, {}),
      onClick: handleClick,
      type: "primary",
      style: {
        width: 60,
        height: 60
      },
      tooltip: false
    }, position && { position })
  ) });
};
var WhatsAppChat_default = WhatsAppChat;

// src/components/PageBanner/style.ts

var BannerWrapper = _styledcomponents2.default.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  overflow: hidden;
`;
var BannerOverlay = _styledcomponents2.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  z-index: 1;
`;
var BannerContent = _styledcomponents2.default.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #ffffff;
  padding: 0 20px;
`;
var PageTitle = _styledcomponents2.default.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
var Subtitle = _styledcomponents2.default.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
var BannerImage = _styledcomponents2.default.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

// src/components/PageBanner/index.tsx

var PageBanner = ({
  title,
  subtitle,
  backgroundImage,
  height = 300
}) => {
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, BannerWrapper, { style: { height: `${height}px` }, children: [
    backgroundImage && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      BannerImage,
      {
        src: backgroundImage.src,
        alt: backgroundImage.alt,
        width: 1920,
        height,
        style: {
          objectFit: "cover",
          objectPosition: "center"
        }
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, BannerOverlay, {}),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, BannerContent, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, PageTitle, { children: title }),
      subtitle && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Subtitle, { children: subtitle })
    ] })
  ] });
};
var PageBanner_default = PageBanner;

// src/components/Cards/InformationCard/index.tsx



// src/components/Cards/InformationCard/style.ts


var StyledCard = _styledcomponents2.default.call(void 0, _antd.Card)`
    padding: ${({ spacing }) => spacing || ""};
    background: ${({ background }) => background || "#fff"};
    .ant-card-body {
        padding: 15px;
        overflow: hidden;
    }
`;

// src/components/Cards/InformationCard/index.tsx

var imageContainerStyle = {
  position: "relative",
  width: "100%",
  minHeight: "250px",
  height: "100%",
  overflow: "hidden"
};
var imgStyle = {
  objectFit: "cover"
};
var defaultImage = {
  src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  width: 273,
  height: 273
  // Using square aspect ratio for default
};
var InformationCard = ({ title, image, description }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, StyledCard, { className: "p-0", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Row, { gutter: [0, 0], children: [
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { xs: 24, sm: 24, md: 12, style: { height: "100%" }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { style: imageContainerStyle, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _image2.default,
    {
      src: (image == null ? void 0 : image.src) || defaultImage.src,
      alt: (image == null ? void 0 : image.alt) || "Information card image",
      fill: true,
      priority: true,
      style: imgStyle,
      sizes: "(max-width: 768px) 100vw, 50vw"
    }
  ) }) }),
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { xs: 24, sm: 24, md: 12, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "py-3 md:p-6", children: [
    title && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Typography.Title, { level: 3, style: { marginTop: 0 }, children: title }),
    description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Typography.Paragraph, { children: description })
  ] }) })
] }) });
var InformationCard_default = InformationCard;

// src/components/Section/style.ts

var StyledSection = _styledcomponents2.default.section`
    padding: ${({ spacing }) => spacing || ""};
    background: ${({ background }) => background || "#fff"};
`;
var SectionTitle = _styledcomponents2.default.h2`
    font-size: 3rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
    margin: 0 0 16px;
    text-align: ${({ align }) => align || "left"};
      ${media.min("md")} {
        font-size: 4rem;
    }
`;

// src/components/Section/index.tsx

var Section = ({
  title,
  children,
  className,
  titleAlign = "center",
  fluid = false
}) => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, StyledSection, { className, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: fluid ? "max-w-[1400px] mx-auto" : "", children: [
    title && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SectionTitle, { align: titleAlign, children: title }),
    children
  ] }) });
};
var Section_default = Section;

// src/components/Cards/DetailedCard/index.tsx



// src/components/Cards/DetailedCard/style.ts


var StyledCard2 = _styledcomponents2.default.call(void 0, _antd.Card)`
    padding: ${({ spacing }) => spacing || ""};
    background: ${({ background }) => background || "#fff"};
    .ant-card-body {
        padding: 0;
        overflow: hidden;
    }
`;

// src/components/Cards/DetailedCard/index.tsx

var imageContainerStyle2 = {
  position: "relative",
  width: "100%",
  minHeight: "300px",
  height: "100%",
  overflow: "hidden",
  borderRadius: "8px"
};
var imgStyle2 = {
  objectFit: "cover"
};
var defaultImage2 = {
  src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  width: 273,
  height: 273
  // Using square aspect ratio for default
};
var DetailedCard = ({
  title,
  subTitle,
  description,
  image
}) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, StyledCard2, { className: "p-0", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Row, { gutter: [0, 0], children: [
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { xs: 24, sm: 24, md: 10, style: { height: "100%" }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { style: imageContainerStyle2, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _image2.default,
    {
      src: (image == null ? void 0 : image.src) || defaultImage2.src,
      alt: (image == null ? void 0 : image.alt) || "Information card image",
      fill: true,
      priority: true,
      style: imgStyle2,
      sizes: "(max-width: 768px) 100vw, 50vw"
    }
  ) }) }),
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { xs: 24, sm: 24, md: 12, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { style: { padding: 24 }, children: [
    subTitle && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Typography.Title, { level: 4, children: subTitle }),
    title && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Typography.Title, { level: 3, children: title }),
    description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Typography.Paragraph, { children: description })
  ] }) })
] }) });
var DetailedCard_default = DetailedCard;

// src/components/InstagramFeed/index.tsx




var FeedWrapper = _styledcomponents2.default.div`
    .instagram-card {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        transition: transform 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            
            .overlay {
                opacity: 1;
            }
        }
    }

    .image-container {
        position: relative;
        width: 100%;
        padding-bottom: 100%; // Square aspect ratio
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 1rem;
        color: white;
        text-align: center;
    }

    .caption {
        font-size: 0.9rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 1rem;
    }

    .view-link {
        color: white;
        border: 1px solid white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        transition: all 0.3s ease;

        &:hover {
            background: white;
            color: black;
        }
    }
`;
var HeaderSection = _styledcomponents2.default.div`
    text-align: center;
    margin-bottom: 2rem;

    h2 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .username {
        color: #666;
        font-size: 1.1rem;
        
        &:hover {
            color: #000;
        }
    }
`;
var InstagramFeed = ({
  posts = [],
  columns = 4,
  loading = false,
  username = "dropoutcarcare"
}) => {
  const colSpan = 24 / columns;
  if (loading) {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, FeedWrapper, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Row, { gutter: [16, 16], children: [...Array(columns * 2)].map((_, index) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { xs: 12, sm: 8, md: colSpan, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Card, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Skeleton.Image, { active: true, style: { width: "100%", height: "200px" } }) }) }, index)) }) });
  }
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, FeedWrapper, { children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, HeaderSection, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h2", { children: "Follow Us on Instagram" }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
        _link2.default,
        {
          href: `https://instagram.com/${username}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "username",
          children: [
            "@",
            username
          ]
        }
      )
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Row, { gutter: [16, 16], children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { xs: 12, sm: 8, md: 6, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        className: "instagram-card",
        dangerouslySetInnerHTML: {
          __html: `
         <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DPSsJFnE4sB/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DPSsJFnE4sB/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DPSsJFnE4sB/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Dropout car care (DCC) (@dropoutcarcare)</a></p></div></blockquote>
                        <script async src="//www.instagram.com/embed.js"></script>
        `
        }
      }
    ) }) })
  ] });
};
var InstagramFeed_default = InstagramFeed;

// src/components/Map/index.tsx

var Map = () => {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "w-full rounded-lg overflow-hidden shadow-lg", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "iframe",
    {
      title: "Dropout Car Care, Noida Extension Location",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.775857710001!2d77.43779717625493!3d28.606500285260953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54780cb87c3150f%3A0xfb1d0ce5e6705659!2sDropout%20car%20care%20(DCC)!5e0!3m2!1sen!2sin!4v1762109570963!5m2!1sen!2sin",
      width: "100%",
      height: "100%",
      style: { border: 0 },
      allowFullScreen: true,
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade"
    }
  ) });
};
var Map_default = Map;

// src/components/Video/index.tsx

var Video = ({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  width,
  height,
  className,
  style,
  onPlay,
  onPause,
  onEnded
}) => {
  const videoProps = {
    src,
    poster,
    controls,
    autoPlay,
    loop,
    muted,
    onPlay: onPlay ? () => onPlay() : void 0,
    onPause: onPause ? () => onPause() : void 0,
    onEnded: onEnded ? () => onEnded() : void 0
  };
  const sizeStyle = {};
  if (width) sizeStyle.width = typeof width === "number" ? `${width}px` : width;
  if (height) sizeStyle.height = typeof height === "number" ? `${height}px` : height;
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className, style, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "video", __spreadProps(__spreadValues({}, videoProps), { style: __spreadValues({ display: "block", maxWidth: "100%" }, sizeStyle), children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "source", { src }),
    "Your browser does not support the video tag."
  ] })) });
};
var Video_default = Video;

// src/components/Gallery/index.tsx


var Gallery = ({
  images,
  columns = 3,
  gap = 8,
  className,
  style,
  onImageClick
}) => {
  const gridStyle = __spreadValues({
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: `${gap}px`,
    alignItems: "start",
    width: "100%"
  }, style);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className, style: gridStyle, children: images && images.map((img, idx) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "button",
    {
      onClick: () => onImageClick && onImageClick(img, idx),
      style: { border: "none", padding: 0, background: "transparent", cursor: onImageClick ? "pointer" : "default" },
      "aria-label": img.alt || `Image ${idx + 1}`,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _antd.Image,
        {
          src: img.src,
          alt: img.alt || "",
          width: img.width,
          height: img.height,
          preview: false,
          style: { width: "100%", height: "auto", display: "block", objectFit: "cover" }
        }
      )
    },
    idx
  )) });
};
var Gallery_default = Gallery;

// src/components/Navigation/index.tsx


var navItems2 = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];
var linkBaseStyle = {
  padding: "8px 12px",
  textDecoration: "none",
  color: "#222",
  display: "inline-block"
};
var activeStyle = {
  fontWeight: 700,
  color: "#0b5fff"
};
var navWrapperStyle = {
  display: "flex",
  gap: 8,
  alignItems: "center"
};
var Navigation = () => {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "nav", { style: navWrapperStyle, "aria-label": "Main navigation", children: navItems2.map((item) => {
    const isActive = pathname === item.href;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      _link2.default,
      {
        href: item.href,
        style: __spreadValues(__spreadValues({}, linkBaseStyle), isActive ? activeStyle : {}),
        children: [
          item.icon ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { style: { marginRight: 6 }, children: item.icon }) : null,
          item.label
        ]
      },
      item.href
    );
  }) });
};
var Navigation_default = Navigation;

// src/components/MainLayout/index.tsx




var { Header, Content, Footer: Footer2, Sider } = _antd.Layout;
var items = [_icons.UserOutlined, _icons.VideoCameraOutlined, _icons.UploadOutlined, _icons.UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: _react2.default.createElement(icon),
    label: `nav ${index + 1}`
  })
);
var MainLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = _antd.theme.useToken();
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Layout, { children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      Sider,
      {
        breakpoint: "lg",
        collapsedWidth: "0",
        onBreakpoint: (broken) => {
          console.log(broken);
        },
        onCollapse: (collapsed, type) => {
          console.log(collapsed, type);
        },
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "demo-logo-vertical" }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Menu, { theme: "dark", mode: "inline", defaultSelectedKeys: ["4"], items })
        ]
      }
    ),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Layout, { children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Header, { style: { padding: 0, background: colorBgContainer } }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Content, { style: { margin: "24px 16px 0" }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "div",
        {
          style: {
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          },
          children: children != null ? children : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { children: "Welcome" }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { children: "This is the main content area. Pass children to render dynamic content." })
          ] })
        }
      ) }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, Footer2, { style: { textAlign: "center" }, children: [
        "Ant Design \xA9",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Created by Ant UED"
      ] })
    ] })
  ] });
};
var MainLayout_default = MainLayout;

// src/components/Header/index.tsx

var MainHeader = () => {
  const pathname = _navigation.usePathname.call(void 0, );
  const [selectedKey, setSelectedKey] = _react.useState.call(void 0, "home");
  const [drawerVisible, setDrawerVisible] = _react.useState.call(void 0, false);
  const menuItems = navItems_default.map((it) => ({
    key: it.key,
    label: it.label,
    icon: it.icon
  }));
  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
  };
  const activeKeyFromPath = _react2.default.useMemo(() => {
    const match = navItems_default.find((item) => item.path === pathname);
    return match ? match.key : "home";
  }, [pathname]);
  _react2.default.useEffect(() => {
    setSelectedKey(activeKeyFromPath);
  }, [activeKeyFromPath]);
  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, HeaderWrapper, { className: "dropout-header relative", children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, BlueTopBar, { className: "top-bar max-w-[1400px] mx-auto", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, BlueTopBarRow, { className: "h-[50px] max-w-[900px] flex items-center ml-auto relative", children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { flex: "auto", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, WelcomeText, { className: "marquee-inner", children: HEADER_CONTENT.WELCOME_MESSAGE }) }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SocialLinks_default, { className: "hidden md:flex" }) }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { className: "book-now-button", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, BookNowButton, { as: _antd.Button, children: HEADER_CONTENT.BOOK_NOW_TEXT }) })
    ] }) }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, MainHeaderWrapper, { className: "max-w-[1400px] mx-auto flex justify-center md:justify-between", children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, MainHeaderColLeft, { flex: "none", className: "md:pt-8", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, LogoRow, { href: "/", className: "py-4 block md:p-0", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, LogoImage, { className: "block", src: HEADER_CONTENT.LOGO_SRC, alt: HEADER_CONTENT.LOGO_ALT }) }) }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, MainHeaderColRight, { className: "flex content-center justify-end", children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _antd.Space, { size: 40, children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InfoBlock, { className: "flex", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _icons.EnvironmentOutlined, { style: { fontSize: 22, color: "#222" } }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InfoBlockTitle, { children: HEADER_CONTENT.ADDRESS_TITLE }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InfoBlockSub, { children: HEADER_CONTENT.ADDRESS_SUB })
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InfoBlock, { className: "flex", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _icons.MailOutlined, { style: { fontSize: 22, color: "#222" } }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InfoBlockTitle, { children: HEADER_CONTENT.EMAIL_TITLE }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InfoBlockSub, { children: HEADER_CONTENT.EMAIL_SUB })
          ] })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InfoBlock, { className: "flex", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _icons.ClockCircleOutlined, { style: { fontSize: 22, color: "#222" } }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InfoBlockTitle, { children: HEADER_CONTENT.WORKING_HOURS_TITLE }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InfoBlockSub, { children: HEADER_CONTENT.WORKING_HOURS_SUB })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, BlackNavBarRow, { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "nav-row h-[50px] flex content-center relative max-w-[900px] ml-auto", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Button, { className: "menu-icon md:hidden text-blue-950 h-auto", type: "text", icon: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _icons.MenuOutlined, {}), onClick: showDrawer }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _antd.Col, { flex: "auto", className: "hidden md:block", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          MenuStyled,
          {
            mode: "horizontal",
            theme: "dark",
            selectedKeys: [selectedKey],
            items: menuItems,
            onClick: ({ key }) => setSelectedKey(key)
          }
        ) }),
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, InfoBlock, { className: "flex ml-auto md:hidden", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _icons.ClockCircleOutlined, { style: { fontSize: 18, color: "#888" } }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, InfoBlockSub, { children: HEADER_CONTENT.WORKING_HOURS_SUB })
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SocialLinks_default, { className: "flex pr-4 md:p-0 ml-auto md:m-0 md:hidden", color: "#fff" })
      ] }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _antd.Drawer,
        {
          title: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, header_default, {}),
          placement: "left",
          onClose: closeDrawer,
          closable: { placement: "end" },
          open: drawerVisible,
          className: "md:hidden",
          children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "flex flex-col h-full justify-between", children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
              _antd.Menu,
              {
                mode: "vertical",
                selectedKeys: [selectedKey],
                items: menuItems,
                onClick: (info) => {
                  handleMenuClick(info);
                  closeDrawer();
                }
              }
            ),
            /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { children: [
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "relative uppercase", children: "CONTECT INFO " }),
              /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "address", { children: [
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "address-line mb-4", children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "address-label secondary-color barlow-medium block", children: "Phone : " }),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { className: "primary-color", href: "callto:+918727073012", children: "+91 8727073012 " })
                ] }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "address-line mb-4", children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "address-label secondary-color barlow-medium block", children: "Email : " }),
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "a", { className: "primary-color", href: "mailto:dropoutcarcare@gmail.com", children: "dropoutcarcare@gmail.com" })
                ] }),
                /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "address-line mb-4", children: [
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "address-label secondary-color barlow-medium block", children: "Address : " }),
                  "Ithera Market, Opp- Gaur world smart street,",
                  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "br", {}),
                  " Grater Noida West, Uttar Pradesh, India"
                ] })
              ] }),
              /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Map_default, {})
            ] })
          ] })
        }
      )
    ] })
  ] });
};
var Header_default = MainHeader;























exports.AlertBanner_default = AlertBanner_default; exports.Header_default = Header_default; exports.Banner_default = Banner_default; exports.Slider_default = Slider_default; exports.Footer_default = Footer_default; exports.header_default = header_default; exports.footer_default = footer_default; exports.SocialLinks_default = SocialLinks_default; exports.Tabs_default = Tabs_default; exports.BaseCard_default = BaseCard_default; exports.WhatsAppChat_default = WhatsAppChat_default; exports.PageBanner_default = PageBanner_default; exports.InformationCard_default = InformationCard_default; exports.Section_default = Section_default; exports.DetailedCard_default = DetailedCard_default; exports.InstagramFeed_default = InstagramFeed_default; exports.Map_default = Map_default; exports.Video_default = Video_default; exports.Gallery_default = Gallery_default; exports.Navigation_default = Navigation_default; exports.MainLayout_default = MainLayout_default;
