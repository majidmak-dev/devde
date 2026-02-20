export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    category: string;
    impact: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    metrics: { label: string; value: string; }[];
    image: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: "fintech-pro",
        title: "Next-Gen Wealth Management",
        client: "Global Finance Corp",
        category: "Fintech",
        impact: "40% Revenue Lift",
        description: "A complete overhaul of the legacy banking UI/UX combined with a high-performance backend infrastructure.",
        challenge: "Fragmented user experience across multiple banking products led to high churn and low digital adoption.",
        solution: "We implemented a unified design system and a micro-frontend architecture powered by Next.js and Prisma, ensuring sub-second response times.",
        results: [
            "Reduced user onboarding time by 60%",
            "Increased active monthly users by 45%",
            "Seamless integration with 15+ external APIs"
        ],
        metrics: [
            { label: "Performance", value: "99.9%" },
            { label: "Deployment", value: "3 mins" },
            { label: "Security", value: "L7 WAF" }
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "eco-store-ultra",
        title: "E-commerce Infrastructure Scaled",
        client: "StyleHub Global",
        category: "E-commerce",
        impact: "2.5x Faster Checkout",
        description: "Architecting a headless commerce engine capable of handling 100k+ concurrent users during peak flash sales.",
        challenge: "The client faced frequent downtimes during high-traffic events, costing millions in lost sales.",
        solution: "Migration to an edge-cached headless architecture with ultra-responsive interactive elements and AI-driven recommendations.",
        results: [
            "Zero downtime during Black Friday week",
            "Conversion rate increased by 18%",
            "Server costs reduced by 30% through edge optimization"
        ],
        metrics: [
            { label: "Concurrent", value: "100k+" },
            { label: "Latency", value: "45ms" },
            { label: "Uptime", value: "99.99%" }
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "saas-automate",
        title: "AI Business Intelligence Dashboard",
        client: "Nova Analytics",
        category: "SaaS",
        impact: "80% Time Saved",
        description: "An advanced data visualization platform that turns complex raw data into actionable business intelligence using AI.",
        challenge: "Data scientists were spending too much time manual cleaning and visualizing data for executive reports.",
        solution: "Automated data pipelines with integrated LLMs for natural language querying and dynamic chart generation.",
        results: [
            "Report generation reduced from days to seconds",
            "Enhanced decision accuracy for executive board",
            "Integrated across all company departments"
        ],
        metrics: [
            { label: "Automation", value: "AI-Native" },
            { label: "Processing", value: "Real-time" },
            { label: "Accuracy", value: "99.2%" }
        ],
        image: "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "premium-streaming-ux",
        title: "Cinematic Streaming Experience",
        client: "Aura Stream",
        category: "UI/UX Design",
        impact: "+120% Watch Time",
        description: "Reimagining the streaming interface with a focus on immersive discovery, spatial audio integration, and glassmorphic depth.",
        challenge: "The user was overwhelmed by choice and frustrated by a cluttered, flat interface that failed to convey the quality of the content.",
        solution: "We designed a 'Cinematic Flow' system using glassmorphism, depth-aware scrolling, and AI-powered personalized background ambiance.",
        results: [
            "User satisfaction score (CSAT) rose to 94%",
            "Churn rate decreased by 22% in the first quarter",
            "Awarded 'Best UX of 2025' by DesignHub"
        ],
        metrics: [
            { label: "Engagement", value: "+120%" },
            { label: "CSAT", value: "94/100" },
            { label: "Retention", value: "+22%" }
        ],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "neo-banking-design",
        title: "Neo-Banking for Gen Alpha",
        client: "Zenith Pay",
        category: "UI/UX Design",
        impact: "Top 1 App Store",
        description: "A bold, high-contrast, and highly interactive financial app designed for the next generation of digital natives.",
        challenge: "Traditional banking apps were too clinical and complex, failing to engage a younger, tech-savvy demographic.",
        solution: "Developed a 'Gamified Finance' UX with tactile haptics, neon-glow accents, and a custom design system that prioritizes speed and clarity.",
        results: [
            "Reached #1 in the App Store Finance category within 2 weeks",
            "Average session time increased by 3.5x",
            "Viral growth through social sharing features"
        ],
        metrics: [
            { label: "Growth", value: "Viral" },
            { label: "Session", value: "3.5x Up" },
            { label: "Rating", value: "4.9/5" }
        ],
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200"
    }
];
