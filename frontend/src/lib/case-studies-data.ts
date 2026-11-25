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
        id: "noor-e-ilahi",
        title: "Global Islamic Digital Platform & Astronomical Geodesy Engine",
        client: "Noor-e-ilahi (nooreilahi.com)",
        category: "Web Development",
        impact: "100k+ Active Users | <120ms Latency",
        description: "Engineering an international, 100% ad-free Islamic technology ecosystem delivering real-time solar zenith prayer calculations, 11-language audio-synchronized Quran recitations, spherical trigonometry Qibla compass, and offline PWA functionality.",
        challenge: "Calculating real-time astronomical solar zenith prayer times and spherical Great-Circle Kaaba azimuth client-side with zero latency while serving millions of audio streams across 11 languages with strict offline resilience.",
        solution: "Engineered a Next.js Turbopack edge architecture with Web Workers for client-side geodesy math, Service Worker caching for complete offline functionality, and optimized CDN streaming for multi-qari recitations.",
        results: [
            "Achieved sub-120ms Time to First Byte (TTFB) globally",
            "100% offline capability for core prayer times, Quran reading, and guides",
            "Ranked #1 for international Islamic search and AEO citation benchmarks"
        ],
        metrics: [
            { label: "Global Latency", value: "<120ms" },
            { label: "Languages", value: "11 RTL/LTR" },
            { label: "Uptime", value: "99.99%" }
        ],
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "ratemyux-ai",
        title: "Neural Vision AI Design Auditing & Usability Scorer",
        client: "RateMyUX (ratemyux.com)",
        category: "SaaS",
        impact: "11-Dimension AI Scorer | 3.2s Audit Velocity",
        description: "Building an enterprise-grade AI UX auditing platform that analyzes live website URLs, Figma prototypes, and screenshots using neural Vision AI to generate Nielsen heuristic scores and prioritized redesign roadmaps.",
        challenge: "Manual UX audits take design consultants days or weeks to compile. The client required an automated multimodal engine capable of visually dissecting interfaces, evaluating cognitive load, and generating actionable code and design recommendations in seconds.",
        solution: "Architected a distributed vision AI pipeline leveraging high-resolution DOM snapshotting, multimodal LLM vision analysis, and an 11-dimension heuristic scoring algorithm with automated PDF/interactive report export.",
        results: [
            "Reduced UX evaluation time from 5 days to 3.2 seconds",
            "Over 25,000 interfaces audited with 98.4% heuristic alignment accuracy",
            "Accelerated client design conversion lifts by an average of 34%"
        ],
        metrics: [
            { label: "Audit Time", value: "3.2s" },
            { label: "Dimensions", value: "11 Heuristics" },
            { label: "Accuracy", value: "98.4%" }
        ],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200"
    },
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
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
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
    },
    {
        id: "weekendtravellers-platform",
        title: "AI-Powered Travel Discovery Platform",
        client: "WeekendTravellers (weekendtravellers.com)",
        category: "Web Development",
        impact: "3.8x Booking Conversions | 95k MAU",
        description: "Engineering a full-stack AI travel discovery platform with real-time flight and hotel aggregation, personalized itinerary generation via LLM, and a sub-100ms edge-cached search experience for weekend trip seekers.",
        challenge: "Users were overwhelmed by thousands of travel options across fragmented platforms with no personalization. The client needed a single intelligent engine that could understand natural language travel intent, aggregate live pricing from 40+ APIs, and generate ready-to-book itineraries in seconds.",
        solution: "Built a Next.js 15 edge platform with LLM-powered itinerary generation, Redis-cached real-time price aggregation, and a conversational AI booking assistant. Implemented vector search over 500k+ destination profiles for semantic trip matching.",
        results: [
            "Booking conversion rate increased 3.8x over prior platform in 90 days",
            "95,000 monthly active users within 6 months of launch",
            "Average itinerary generation time reduced to under 4 seconds",
            "Partnership integrations with 40+ flight and hotel aggregator APIs"
        ],
        metrics: [
            { label: "Conversion Lift", value: "3.8x" },
            { label: "Monthly Users", value: "95k MAU" },
            { label: "API Latency", value: "<100ms" }
        ],
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "unqode-saas-platform",
        title: "Multi-Tenant No-Code App Builder SaaS",
        client: "Unqode (unqode.com)",
        category: "SaaS",
        impact: "10k+ Apps Built | 99.99% Uptime",
        description: "Architecting a scalable multi-tenant no-code application builder SaaS where thousands of businesses create custom internal tools, client portals, and workflow automations without writing a single line of code.",
        challenge: "The platform required complete data isolation for each tenant, real-time collaborative editing across shared workspaces, and a visual drag-and-drop engine performant enough to handle complex enterprise-grade application logic without page reloads.",
        solution: "Implemented a schema-per-tenant PostgreSQL architecture with Neon serverless branching, operational transform-based real-time collaboration, and a custom WebGL-accelerated canvas renderer for the drag-and-drop builder. Deployed on Kubernetes with blue-green releases.",
        results: [
            "Over 10,000 apps built by customers within the first year",
            "Zero cross-tenant data incidents across 2.4 million database operations",
            "Real-time collaboration supports up to 50 simultaneous editors per workspace",
            "99.99% platform uptime SLA sustained through 3 major feature releases"
        ],
        metrics: [
            { label: "Apps Built", value: "10k+" },
            { label: "Uptime SLA", value: "99.99%" },
            { label: "Collab Latency", value: "<35ms" }
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "enterprise-powerapps-automation",
        title: "Enterprise Power Platform Automation Suite",
        client: "Global Manufacturing Corp",
        category: "PowerApps",
        impact: "92% Process Time Cut | £2.4M Saved",
        description: "Replacing a 15-year-old legacy SAP approval workflow with a Microsoft Power Platform suite — custom Canvas Apps, Power Automate cloud flows, Dataverse entity modeling, and a CoE governance framework — cutting procurement cycle time from 14 days to 26 hours.",
        challenge: "A 4,000-employee manufacturing enterprise was running procurement, compliance sign-offs, and supplier onboarding entirely through manual email chains and legacy SAP screens. Approval delays averaged 14 business days and caused £2.4M in annual operational losses.",
        solution: "Engineered a custom Power Apps canvas portal with dynamic approval routing, automated Dataverse record creation, Power Automate flows with SAP ERP integration via custom connectors, and an enterprise CoE governance layer with DLP policies and automated compliance telemetry.",
        results: [
            "Procurement approval cycle reduced from 14 days to 26 hours — a 92% reduction",
            "£2.4M in annual operational efficiency savings in year one",
            "Automated 18 previously manual approval workflows with zero IT involvement",
            "Full GDPR-compliant audit trail for every document and decision"
        ],
        metrics: [
            { label: "Time Saved", value: "92%" },
            { label: "Annual ROI", value: "£2.4M" },
            { label: "Workflows", value: "18 Auto" }
        ],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "healthcare-saas-hipaa",
        title: "HIPAA-Compliant Telemedicine SaaS Platform",
        client: "MediConnect Pro",
        category: "SaaS",
        impact: "Zero HIPAA Incidents | 48k Patients",
        description: "Building a HIPAA-compliant telemedicine platform handling encrypted video consultations, e-prescriptions, insurance eligibility verification, and EHR integrations — serving 48,000 active patients across 12 US states.",
        challenge: "The client needed a telemedicine platform that passed strict HIPAA Security Rule audits, integrated with six disparate EHR systems (Epic, Cerner, Athenahealth), and delivered WebRTC video consultations with sub-200ms latency across rural cellular networks.",
        solution: "Architected a zero-trust cloud infrastructure with AES-256 at-rest encryption, Twilio HIPAA-eligible WebRTC video, HL7 FHIR R4 EHR API integrations, database-per-tenant isolation, and automated BAA compliance documentation. Deployed on HIPAA-eligible AWS infrastructure.",
        results: [
            "Zero HIPAA security incidents across 1.2 million patient data transactions",
            "48,000 active patients onboarded across 12 US states in 8 months",
            "Sub-200ms video consultation latency even on 4G rural connections",
            "Passed independent HIPAA Security Rule audit with zero critical findings"
        ],
        metrics: [
            { label: "HIPAA Incidents", value: "Zero" },
            { label: "Active Patients", value: "48k" },
            { label: "Video Latency", value: "<200ms" }
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "ecommerce-ai-recommendations",
        title: "AI Recommendation Engine for Luxury Fashion",
        client: "Maison Luxe",
        category: "E-commerce",
        impact: "+41% AOV | 68% Repeat Purchase Rate",
        description: "Engineering a real-time AI product recommendation engine for a luxury fashion e-commerce brand, leveraging collaborative filtering, visual similarity embeddings, and session-aware personalization to lift average order value by 41%.",
        challenge: "A luxury fashion brand with 120,000 SKUs was showing generic best-seller recommendations to all customers, missing high-intent cross-sell opportunities and failing to surface curated ensemble suggestions that matched each shopper's taste profile.",
        solution: "Built a hybrid recommendation engine combining collaborative filtering (user-item matrices), CLIP-powered visual embedding similarity for style matching, and real-time session context signals. Served recommendations via a sub-30ms edge API with A/B testing infrastructure.",
        results: [
            "Average order value increased by 41% within 60 days of engine deployment",
            "68% repeat purchase rate among customers who engaged with AI recommendations",
            "Recommendation click-through rate of 24% versus a 4% industry benchmark",
            "Engine processes 2.8 million recommendation requests per day at 28ms P95 latency"
        ],
        metrics: [
            { label: "AOV Lift", value: "+41%" },
            { label: "Repeat Rate", value: "68%" },
            { label: "Rec Latency", value: "28ms P95" }
        ],
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "geo-aeo-seo-domination",
        title: "GEO & AEO Search Domination Campaign",
        client: "LegalEdge Consultants",
        category: "SEO Growth",
        impact: "#1 AI Citations | +312% Organic Traffic",
        description: "Executing a full-stack Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) campaign for a UK legal consultancy, achieving primary citation status across Perplexity, ChatGPT Search, and Google AI Overviews within 90 days.",
        challenge: "A specialist UK legal consultancy was invisible on AI search engines despite strong traditional SEO rankings. As 60% of their target clients shifted to conversational AI queries, the firm faced a critical threat of being entirely bypassed in the generative search era.",
        solution: "Implemented a comprehensive GEO framework: statistical density rewrites achieving 40+ verified data points per article, structured Direct Answer blocks, FAQPage JSON-LD schemas, an /llms.txt manifest, Knowledge Graph entity disambiguation, and sub-150ms edge delivery via Next.js and Cloudflare.",
        results: [
            "Achieved primary citation status across Perplexity Pro, ChatGPT Search, and Gemini AI Overviews",
            "Organic search traffic increased by 312% in 90 days post-implementation",
            "Brand mentioned in 68% of AI-generated answers for target legal queries",
            "Conversion rate from AI referral traffic reached 8.4% versus 2.1% industry average"
        ],
        metrics: [
            { label: "Traffic Growth", value: "+312%" },
            { label: "AI Brand Share", value: "68%" },
            { label: "AI Conversion", value: "8.4%" }
        ],
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "real-estate-proptech-platform",
        title: "AI-Powered PropTech SaaS with 3D Virtual Tours",
        client: "NestVision PropTech",
        category: "Web Development",
        impact: "4.2x Lead Quality | 180k Listings",
        description: "Building an enterprise PropTech SaaS platform with AI-generated property valuations, WebGL 3D virtual tour rendering, real-time mortgage eligibility calculators, and CRM automation — serving 180,000 live property listings across the UK and UAE.",
        challenge: "Traditional property portals provided static gallery images and manual agent-led tours, creating friction for international buyers. The client required immersive 3D property experiences, instant AI valuation estimates, and automated lead qualification to slash the sales cycle.",
        solution: "Engineered a Next.js 15 platform with Three.js WebGL 3D tour rendering, a fine-tuned regression model for AI property valuations trained on 2.4M transactions, real-time Stripe-integrated mortgage calculators, and HubSpot CRM webhook automation for instant lead scoring.",
        results: [
            "Lead quality score improved 4.2x as AI pre-qualified buyers before agent contact",
            "180,000 live property listings indexed with sub-80ms search response times",
            "3D virtual tour engagement increased average session time from 2.1 to 7.8 minutes",
            "Agent time-to-close reduced by 38% through automated lead qualification flows"
        ],
        metrics: [
            { label: "Lead Quality", value: "4.2x" },
            { label: "Listings", value: "180k Live" },
            { label: "Search Speed", value: "<80ms" }
        ],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200"
    },
    {
        id: "devdesigns-cloud-infrastructure",
        title: "Zero-Downtime Multi-Region Cloud Migration",
        client: "FinServe Capital Markets",
        category: "Infrastructure",
        impact: "99.999% Uptime | 74% Cost Reduction",
        description: "Migrating a capital markets trading platform processing £4.2B in daily transaction volume from an aging on-premise data centre to a Kubernetes-orchestrated multi-region cloud architecture with zero trading downtime and a 74% infrastructure cost reduction.",
        challenge: "A UK capital markets firm running core trading systems on 12-year-old on-premise hardware faced increasing failure risk, PCI-DSS compliance gaps, and an inability to scale during market volatility spikes. Any migration downtime would halt billions in daily trades.",
        solution: "Executed a phased blue-green cloud migration strategy: containerising 34 legacy microservices with Docker, orchestrating on AWS EKS with Cilium eBPF networking, implementing Kafka event streaming for trade order consistency, and deploying Datadog full-stack observability. Zero-downtime achieved via traffic shadowing and canary releases.",
        results: [
            "Zero trading downtime across a 6-month phased migration of 34 microservices",
            "Infrastructure cost reduced by 74% through auto-scaling and right-sizing",
            "Platform uptime improved to 99.999% from a previous 99.4% SLA",
            "PCI-DSS Level 1 compliance achieved through automated security scanning"
        ],
        metrics: [
            { label: "Uptime SLA", value: "99.999%" },
            { label: "Cost Saved", value: "74%" },
            { label: "Downtime", value: "Zero" }
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    }
];
