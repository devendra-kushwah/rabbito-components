interface CoatingType {
    name: string;
    title: string;
    description: string;
    durability: string;
    price?: string;
    benefits: string[];
    features: string[];
    maintenanceTips: string[];
    technicalSpecs: {
        thickness?: string;
        hardness?: string;
        hydrophobicity?: string;
        heatResistance?: string;
        chemicalResistance?: string;
        warranty?: string;
    };
    applicationProcess: string[];
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

export const coatingTypes: CoatingType[] = [
    {
        name: "graphene",
        title: "Graphene Coating",
        description: "Advanced nano-coating technology incorporating graphene's revolutionary properties for ultimate paint protection and enhancement",
        durability: "5-7 years",
        price: "Starting from ₹12,999",
        benefits: [
            "Superior hardness and scratch resistance",
            "Enhanced heat dissipation properties",
            "Extreme water repellency",
            "Superior gloss retention",
            "Anti-UV protection",
            "Self-cleaning properties"
        ],
        features: [
            "Molecular-level bonding with paint",
            "Revolutionary 3D surface structure",
            "Extreme temperature resistance (-50°C to 800°C)",
            "Enhanced chemical resistance",
            "Superior water contact angle >110°",
            "Increased paint durability"
        ],
        maintenanceTips: [
            "Wash vehicle every 2 weeks with pH-neutral shampoo",
            "Avoid automatic car washes for first month",
            "Apply maintenance spray every 3 months",
            "Regular inspection for any damage",
            "Keep vehicle covered when possible"
        ],
        technicalSpecs: {
            thickness: "2-3 microns",
            hardness: "9H on pencil hardness scale",
            hydrophobicity: "Contact angle >110°",
            heatResistance: "Up to 800°C",
            chemicalResistance: "Excellent against pH 2-13",
            warranty: "5 years with proper maintenance"
        },
        applicationProcess: [
            "Complete paint correction and surface preparation",
            "IPA wipedown to remove contaminants",
            "Application in controlled environment",
            "Multiple layer application for optimal protection",
            "24-hour curing period",
            "Final inspection and quality check"
        ],
        image: {
            src: "/services/coatings/graphene-coating.jpg",
            alt: "Graphene coating application on vehicle",
            width: 800,
            height: 600
        }
    },
    {
        name: "ceramic",
        title: "Ceramic Coating",
        description: "Professional-grade SiO2-based ceramic coating providing exceptional protection and glossy finish",
        durability: "3-5 years",
        price: "Starting from ₹9,999",
        benefits: [
            "Long-lasting protection",
            "High gloss finish",
            "Strong chemical resistance",
            "Excellent UV protection",
            "Enhanced paint depth",
            "Easy maintenance"
        ],
        features: [
            "9H hardness protection",
            "Hydrophobic surface",
            "UV-resistant formula",
            "Chemical-resistant barrier",
            "High temperature resistance",
            "Self-cleaning effect"
        ],
        maintenanceTips: [
            "Regular washing with pH-neutral soap",
            "Quarterly maintenance inspections",
            "Avoid harsh chemicals",
            "Use microfiber towels only",
            "Annual professional inspection"
        ],
        technicalSpecs: {
            thickness: "1-2 microns",
            hardness: "9H pencil hardness",
            hydrophobicity: "Contact angle >90°",
            heatResistance: "Up to 760°C",
            chemicalResistance: "Excellent against most chemicals",
            warranty: "3 years with maintenance"
        },
        applicationProcess: [
            "Multi-stage paint correction",
            "Surface decontamination",
            "Panel preparation",
            "Ceramic coating application",
            "Multiple layer build-up",
            "12-24 hour curing time"
        ],
        image: {
            src: "/services/coatings/ceramic-coating.jpg",
            alt: "Ceramic coating application process",
            width: 800,
            height: 600
        }
    },
    {
        name: "teflon",
        title: "Teflon Coating",
        description: "Fluoropolymer-based coating providing good protection at an economical price point",
        durability: "6-12 months",
        price: "Starting from ₹4,999",
        benefits: [
            "Cost-effective protection",
            "Good water repellency",
            "Basic scratch resistance",
            "Easy application",
            "Quick curing time",
            "Decent gloss enhancement"
        ],
        features: [
            "PTFE-based protection",
            "Water-repellent surface",
            "Basic chemical resistance",
            "UV protection",
            "Smooth finish",
            "Easy maintenance"
        ],
        maintenanceTips: [
            "Monthly reapplication recommended",
            "Regular washing",
            "Avoid harsh chemicals",
            "Keep car covered when possible",
            "Immediate cleaning of contaminants"
        ],
        technicalSpecs: {
            thickness: "0.5-1 micron",
            hardness: "3H pencil hardness",
            hydrophobicity: "Contact angle >80°",
            heatResistance: "Up to 260°C",
            chemicalResistance: "Moderate",
            warranty: "6 months"
        },
        applicationProcess: [
            "Basic paint cleaning",
            "Surface preparation",
            "Teflon coating application",
            "Buffing and finishing",
            "2-4 hour curing time",
            "Final inspection"
        ],
        image: {
            src: "/services/coatings/teflon-coating.jpg",
            alt: "Teflon coating application",
            width: 800,
            height: 600
        }
    },
    {
        name: "borophene",
        title: "Borophene Coating",
        description: "Next-generation 2D material coating offering exceptional protection with atomic-level thickness",
        durability: "7-10 years",
        price: "Starting from ₹24,999",
        benefits: [
            "Ultra-thin protective layer",
            "Exceptional hardness",
            "Supreme heat conductivity",
            "Maximum UV protection",
            "Revolutionary self-healing properties",
            "Unmatched gloss retention"
        ],
        features: [
            "Atomic-scale thickness",
            "Extreme durability",
            "Superior thermal management",
            "Advanced chemical resistance",
            "Enhanced impact resistance",
            "Anti-oxidation properties"
        ],
        maintenanceTips: [
            "Bi-annual professional inspection",
            "Use specialized cleaning products",
            "Regular gentle washing",
            "Avoid high-pressure washing",
            "Annual maintenance coating"
        ],
        technicalSpecs: {
            thickness: "< 1 micron",
            hardness: "10H+ pencil hardness",
            hydrophobicity: "Contact angle >120°",
            heatResistance: "Up to 1200°C",
            chemicalResistance: "Superior against all chemicals",
            warranty: "7 years with maintenance"
        },
        applicationProcess: [
            "Advanced paint correction",
            "Molecular surface preparation",
            "Controlled environment application",
            "Multi-layer nano coating",
            "48-hour curing period",
            "Advanced quality testing"
        ],
        image: {
            src: "/services/coatings/borophene-coating.jpg",
            alt: "Borophene coating technology",
            width: 800,
            height: 600
        }
    }
];

export const coatingComparison = {
    durability: [
        { coating: "Borophene", rating: 5, years: "7-10" },
        { coating: "Graphene", rating: 4, years: "5-7" },
        { coating: "Ceramic", rating: 3, years: "3-5" },
        { coating: "Teflon", rating: 1, years: "0.5-1" }
    ],
    costEffectiveness: [
        { coating: "Teflon", rating: 5, value: "Best value for short term" },
        { coating: "Ceramic", rating: 4, value: "Good long-term value" },
        { coating: "Graphene", rating: 3, value: "Premium value" },
        { coating: "Borophene", rating: 2, value: "Ultra-premium" }
    ],
    protection: [
        { coating: "Borophene", rating: 5, level: "Ultimate" },
        { coating: "Graphene", rating: 4, level: "Superior" },
        { coating: "Ceramic", rating: 3, level: "Excellent" },
        { coating: "Teflon", rating: 2, level: "Good" }
    ]
};

export const maintenanceSchedule = {
    weekly: [
        "Gentle hand wash with pH-neutral car shampoo",
        "Visual inspection for any damage",
        "Spot cleaning of bird droppings or tree sap"
    ],
    monthly: [
        "Detailed inspection of coating",
        "Deep cleaning if required",
        "Application of maintenance spray (if recommended)"
    ],
    quarterly: [
        "Professional inspection",
        "Paint measurement",
        "Coating thickness check",
        "Touch-up if necessary"
    ],
    annual: [
        "Full professional assessment",
        "Deep decontamination",
        "Coating restoration if needed",
        "Update maintenance records"
    ]
};
