export const carServices = [
    {
        category: "Car Detailing & Cleaning",
        services: [
            { name: "Exterior Foam Wash", price: 799 },
            { name: "Interior Deep Cleaning", price: 1899 },
            { name: "Rubbing & Polishing", price: 3499 },
            { name: "Ceramic Coating", price: 9999 },
            { name: "Graphene Coating", price: 12999 },
            { name: "PPF (Paint Protection Film) - Gloss / Matte / Transparent", price: "On Request" },
            { name: "Glass Coating", price: 2000 },
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


export const mainServices = [
    {
        label: "Bodyshop & Paint Restoration",
        image: {
            src: "/services/ppf-image.jpg",
            alt: "Car bodyshop and paint restoration service",
            width: 400,
            height: 300
        },
        services: [
            {
                name: "Panel Denting Correction",
                url: "denting-panel-beating",
                description: "Expert panel beating and dent removal service to restore your car's body panels to their original condition",
                image: {
                    src: "/services/bodyshop/dropout-car-care-panel-restoration.jpg",
                    alt: "Denting and panel beating service",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "Full Body Painting",
                url: "full-body-painting",
                description: "Complete vehicle repainting with premium quality paint and perfect color matching for a showroom finish",
                image: {
                    src: "/services/bodyshop/dropout-car-care-full-body-painting.jpg",
                    alt: "Full body painting service",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "Panel Painting",
                url: "panel-painting-correction",
                description: "Precise panel painting service with expert color matching and seamless blending for damaged or replaced panels",
                image: {
                    src: "/services/bodyshop/dropout-car-care-panel-painting.jpg",
                    alt: "Panel painting and correction service",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "Body Kit Replacement",
                url: "body-kit-replacement",
                description: "Professional installation and replacement of body kits, bumpers, and aesthetic modifications",
                image: {
                    src: "/services/bodyshop/body-kit.jpg",
                    alt: "Body kit replacement service",
                    width: 300,
                    height: 200
                }
            },
        ],
    },
    {
        label: "Detailing & Paint Protection",
        image: {
            src: "/services/ppf-image.jpg",
            alt: "Car detailing and paint protection service",
            width: 400,
            height: 300
        },
        services: [
            {
                name: "PPF (Paint Protection Film)",
                url: "paint-protection-film",
                description: "Advanced paint protection film that shields your car's paint from scratches, chips, and environmental damage",
                image: {
                    src: "/services/detailing/ppf-image.jpg",
                    alt: "Paint Protection Film application",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "Ceramic & Graphene Coating",
                url: "ceramic-graphene-coating",
                description: "Long-lasting protective coating that enhances paint gloss and provides superior protection against UV rays and chemicals",
                image: {
                    src: "/services/detailing/dropout-car-care-ceramic-coating.jpg",
                    alt: "Ceramic and graphene coating service",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "Polishing, Rubbing & Waxing",
                url: "polishing-and-waxing",
                description: "Professional paint correction and protection service to remove swirl marks and restore your car's shine",
                image: {
                    src: "/services/detailing/Polishing-Rubbing-Waxing.jpg",
                    alt: "Car polishing and waxing service",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "Interior & Deep Cleaning",
                url: "interior-deep-cleaning",
                description: "Thorough interior cleaning including leather care, stain removal, and complete sanitization of all surfaces",
                image: {
                    src: "/services/detailing/interior-cleaning.jpg",
                    alt: "Interior deep cleaning service",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "Premium / Diesel Wash",
                url: "premium-diesel-wash",
                description: "Advanced cleaning process specifically designed for diesel vehicles to remove tough grime and engine deposits",
                image: {
                    src: "/services/detailing/Premium-Diesel-Wash.jpg",
                    alt: "Premium car wash service",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "Glass Coating",
                url: "glass-coating",
                description: "Specialized coating that improves visibility and makes your windows water-repellent for safer driving",
                image: {
                    src: "/services/detailing/glass-coating.jpg",
                    alt: "Glass coating application",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "Chrome & Alloy Dressing",
                url: "chrome-alloy-dressing",
                description: "Professional treatment for wheels and chrome parts to restore shine and protect against corrosion",
                image: {
                    src: "/services/detailing/car-Alloy-Dressing.jpg",
                    alt: "Chrome and alloy treatment",
                    width: 300,
                    height: 200
                }
            },
            {
                name: "AC Vents Cleaning",
                url: "ac-vents-cleaning",
                description: "Deep cleaning of AC system to remove bacteria, dust, and improve air quality inside your vehicle",
                image: {
                    src: "/services/detailing/ac-vents-cleaning.jpg",
                    alt: "AC vents cleaning service",
                    width: 300,
                    height: 200
                }
            }
        ],
    },
    // {
    //     label: "Packages",
    //     image: {
    //         src: "/services/ppf-image.jpg",
    //         alt: "Car service packages",
    //         width: 400,
    //         height: 300
    //     },
    //     services: [
    //         {
    //             name: "1 Year Package",
    //             url: "yearly-maintenance",
    //             description: "Comprehensive annual maintenance package including regular detailing, coating maintenance, and protection services",
    //             image: {
    //                 src: "/services/ppf-image.jpg",
    //                 alt: "1 Year maintenance package",
    //                 width: 300,
    //                 height: 200
    //             }
    //         },
    //         {
    //             name: "6 Months Package",
    //             url: "half-yearly-maintenance",
    //             description: "Semi-annual care package with essential detailing services and paint protection maintenance",
    //             image: {
    //                 src: "/services/ppf-image.jpg",
    //                 alt: "6 Months maintenance package",
    //                 width: 300,
    //                 height: 200
    //             }
    //         },
    //         {
    //             name: "3 Months Package",
    //             url: "quarterly-maintenance",
    //             description: "Quarterly maintenance program for regular care and protection of your vehicle's appearance",
    //             image: {
    //                 src: "/services/ppf-image.jpg",
    //                 alt: "3 Months maintenance package",
    //                 width: 300,
    //                 height: 200
    //             }
    //         }
    //     ],
    // },
];


export const serviceNames = [
    "Panel Denting Correction",
    "Full Body Painting",
    "Panel Painting",
    "PPF (Paint Protection Film)",
    "Ceramic & Graphene Coating",
    "Polishing, Rubbing & Waxing",
];
