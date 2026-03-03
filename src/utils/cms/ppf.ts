interface PPFAdvantage {
    title: string;
    description: string;
    icon?: string;
    features?: string[];
    image: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
}

export const ppfAdvantages: PPFAdvantage[] = [
    {
        title: "Self-Healing Technology",
        description: "Advanced urethane film that automatically repairs minor scratches and swirl marks with heat exposure from sunlight or warm water",
        icon: "shield",
        image: {
            src: "/services/ppf/self-healing-demonstration.jpg",
            alt: "PPF self-healing process demonstration",
            width: 600,
            height: 400
        },
        features: [
            "Heals light scratches automatically",
            "Temperature-activated repair process",
            "Maintains glossy finish",
            "Works with both natural sunlight and warm water"
        ]
    },
    {
        title: "Superior Paint Protection",
        description: "Creates an invisible barrier against road debris, rock chips, bug splatter, bird droppings, and environmental contaminants",
        icon: "protection",
        image: {
            src: "/services/ppf/paint-protection-shield.jpg",
            alt: "PPF protecting car paint from rock chips",
            width: 600,
            height: 400
        },
        features: [
            "Rock chip resistance",
            "UV ray protection",
            "Chemical stain prevention",
            "Environmental damage shield"
        ]
    },
    {
        title: "Long-Term Value Preservation",
        description: "Helps maintain vehicle resale value by keeping the original paint in pristine condition for years",
        icon: "value",
        image: {
            src: "/services/ppf/value-preservation.jpg",
            alt: "Protected vs unprotected paint comparison",
            width: 600,
            height: 400
        },
        features: [
            "Up to 10 years of protection",
            "Preserves original paint",
            "Maintains vehicle value",
            "Professional-grade durability"
        ]
    },
    {
        title: "Crystal Clear Transparency",
        description: "Virtually invisible protection that doesn't alter the vehicle's appearance or color",
        icon: "visibility",
        image: {
            src: "/services/ppf/crystal-clear-finish.jpg",
            alt: "Transparent PPF application showing clarity",
            width: 600,
            height: 400
        },
        features: [
            "Optically clear film",
            "No color distortion",
            "Preserves paint depth",
            "High-gloss finish"
        ]
    },
    {
        title: "Customizable Coverage",
        description: "Available in various packages from partial front-end protection to full-body coverage",
        icon: "customize",
        image: {
            src: "/services/ppf/coverage-options.jpg",
            alt: "PPF coverage areas diagram",
            width: 600,
            height: 400
        },
        features: [
            "Full hood protection",
            "Front bumper coverage",
            "Side mirror guards",
            "Custom area application",
            "Full body wrapping option"
        ]
    },
    {
        title: "Low Maintenance",
        description: "Easy to clean and maintain with standard car care products, no special maintenance required",
        icon: "maintenance",
        image: {
            src: "/services/ppf/easy-maintenance.jpg",
            alt: "Simple car wash demonstration with PPF",
            width: 600,
            height: 400
        },
        features: [
            "Regular washing compatible",
            "No special cleaners needed",
            "Wax and sealant friendly",
            "Maintains clarity over time"
        ]
    },
    {
        title: "Professional Installation",
        description: "Expertly applied using computer-cut patterns for perfect fitment and maximum protection",
        icon: "install",
        image: {
            src: "/services/ppf/professional-installation.jpg",
            alt: "Expert PPF installation process",
            width: 600,
            height: 400
        },
        features: [
            "Precision cut patterns",
            "Clean room environment",
            "Expert application",
            "Quality assurance check",
            "Warranty coverage"
        ]
    },
    {
        title: "Hydrophobic Properties",
        description: "Water-repelling surface that helps keep the vehicle cleaner and easier to maintain",
        icon: "water",
        image: {
            src: "/services/ppf/water-beading.jpg",
            alt: "Water beading on PPF surface",
            width: 600,
            height: 400
        },
        features: [
            "Water beading effect",
            "Easier cleaning process",
            "Reduced water spots",
            "Enhanced visibility in rain"
        ]
    },
    {
        title: "Cost-Effective Protection",
        description: "One-time investment that prevents expensive paint repairs and maintains resale value",
        icon: "savings",
        image: {
            src: "/services/ppf/cost-comparison.jpg",
            alt: "Cost comparison of PPF vs paint repairs",
            width: 600,
            height: 400
        },
        features: [
            "Prevents costly paint repairs",
            "Reduces maintenance costs",
            "Higher resale value",
            "Long-term investment return"
        ]
    }
];

export const ppfCoverageAreas = [
    "Full Front End (Hood, Fenders, Bumper)",
    "Complete Hood",
    "Partial Hood",
    "Front Bumper",
    "Side Mirrors",
    "Headlights",
    "A-Pillars",
    "Door Edges",
    "Door Cups",
    "Rear Bumper Loading Area",
    "Full Body Coverage",
    "Rocker Panels",
    "Quarter Panels",
    "Trunk Ledge"
];

export const ppfMaintenanceTips = [
    "Wait 7 days after installation before washing",
    "Use pH-neutral car wash soap",
    "Avoid aggressive scrubbing",
    "Don't wax for first 30 days",
    "Regularly clean bird droppings and tree sap",
    "Avoid automatic car washes for first month",
    "Use microfiber towels for cleaning",
    "Don't pressure wash edges of film"
];
