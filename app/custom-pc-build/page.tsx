import CustomPcBuild from "./ClientPage";
import { Metadata } from "next";
import Script from "next/script";

/* ================= META (SEO) ================= */
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Custom Gaming & Workstation PC Build in Chennai | IT Fixer",

        description:
            "Build a custom PC in Chennai with IT Fixer. Explore gaming PCs, workstations and budget desktop builds with component choices and warranty support.",

        keywords: [
            "custom PC builder Chennai",
            "custom desktop computer Chennai",
            "gaming PC build Chennai",
            "workstation PC Chennai",
            "PC assembly Chennai",
            "budget gaming PC Chennai",
            "video editing PC Chennai",
            "3D rendering PC Chennai",
            "custom computer configuration",
            "IT Fixer",
        ],

        alternates: {
            canonical: "https://www.itfixer.in/custom-pc-build",
        },

        robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

        openGraph: {
            type: "website",
            locale: "en_IN",
            siteName: "IT Fixer",
            title: "Custom Gaming & Workstation PC Build in Chennai | IT Fixer",
            description:
                "Build a custom PC in Chennai with IT Fixer. Explore gaming PCs, workstations and budget desktop builds with component choices and warranty support.",
            url: "https://www.itfixer.in/custom-pc-build-in-chennai",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/pc-build.webp",
                    width: 1200,
                    height: 630,
                    alt: "Custom gaming PC and workstation builds by IT Fixer in Chennai",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Custom Gaming & Workstation PC Build in Chennai | IT Fixer",
            description:
                "Explore custom gaming PCs, workstations and budget desktop builds in Chennai with IT Fixer.",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/pc-build.webp",
                    alt: "Custom PC builds for gaming and professional workloads by IT Fixer",
                },
            ],
        },
    };
}

/* ================= PAGE ================= */
export default function Page() {
    return (
        <>
            {/* ================= IMAGE SRC LINK ================= */}
            <link
                rel="image_src"
                href="https://www.itfixer.in/assets/img/pc-build.webp"
            />

            {/* ================= FAQ SCHEMA ================= */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Why choose IT Fixer for custom PC build in Chennai?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "IT Fixer offers expert guidance, genuine components, professional assembly, and local support.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I choose my own components?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, you can customize every component to suit your needs and budget.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How long does it take to build a PC?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most builds are completed within 1–3 days, depending on component availability and configuration.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Are custom PCs upgradeable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, upgrades are possible depending on component compatibility.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide warranty?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, components are covered by their respective manufacturer warranties.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can you build budget gaming PCs?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we offer budget gaming PCs configured for your performance needs.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* ================= 1. COLLECTIONPAGE SCHEMA ================= */}
            <Script
                id="collection-page-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "@id": "https://www.itfixer.in/custom-pc-build#collection",
                        url: "https://www.itfixer.in/custom-pc-build",
                        name: "Custom PC Build Services in Chennai",
                        description:
                            "Explore custom gaming PCs, video editing PCs, streaming PCs, office PCs and workstation builds from IT Fixer in Chennai.",
                        inLanguage: "en-IN",
                        isPartOf: {
                            "@type": "WebSite",
                            name: "IT Fixer",
                            url: "https://www.itfixer.in/",
                        },
                        about: {
                            "@type": "Thing",
                            name: "Custom PC Building",
                        },
                        mainEntity: {
                            "@id": "https://www.itfixer.in/custom-pc-build#itemlist",
                        },
                    }),
                }}
            />

            {/* ================= 2. ITEMLIST SCHEMA ================= */}
            <Script
                id="itemlist-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "@id": "https://www.itfixer.in/custom-pc-build#itemlist",
                        name: "Custom PC Build Options in Chennai",
                        description:
                            "Custom computer configurations for gaming, creative work, streaming and business use.",
                        numberOfItems: 5,
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Gaming PC Build",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Video Editing PC",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "Streaming PC",
                            },
                            {
                                "@type": "ListItem",
                                position: 4,
                                name: "Office PC",
                            },
                            {
                                "@type": "ListItem",
                                position: 5,
                                name: "3D Rendering PC",
                            },
                        ],
                    }),
                }}
            />

            {/* ================= 3. BREADCRUMB SCHEMA ================= */}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "@id": "https://www.itfixer.in/custom-pc-build#breadcrumb",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: "https://www.itfixer.in/",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Custom PC Build in Chennai",
                                item: "https://www.itfixer.in/custom-pc-build",
                            },
                        ],
                    }),
                }}
            />

            {/* ================= LOCAL BUSINESS / SERVICE SCHEMA ================= */}
            <Script
                id="service-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Custom PC Build in Chennai",
                        serviceType:
                            "Custom Gaming PC Build, High-Performance PC Assembly, Workstation PC Build",
                        provider: {
                            "@type": "LocalBusiness",
                            name: "IT Fixer",
                            url: "https://www.itfixer.in",
                            logo: "https://www.itfixer.in/images/logo.png",
                            image: "https://www.itfixer.in/assets/img/pc-build.webp",
                            description:
                                "IT Fixer is the best gaming PC shop in Chennai offering custom gaming PC builds, workstation PCs, 4K gaming desktops, RGB builds, and high-performance computer setups.",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress:
                                    "New No.29, Old No.31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet (Opp. Kasi Theatre), Ashok Nagar",
                                addressLocality: "Chennai",
                                addressRegion: "Tamil Nadu",
                                postalCode: "600083",
                                addressCountry: "IN",
                            },
                            telephone: "+918585858768",
                            email: "info@itfixer.in",
                            sameAs: [
                                "https://www.facebook.com/itfixer7",
                                "https://www.instagram.com/it__fixer/",
                                "https://www.youtube.com/@Itfixer_fix-it-fast",
                                "https://www.linkedin.com/company/it-fixer-gaming/about/",
                                "https://x.com/itfixer7",
                            ],
                        },
                        areaServed: ["Chennai", "Tamil Nadu", "India"],
                        url: "https://www.itfixer.in/custom-pc-build",
                        description:
                            "Build your dream gaming PC in Chennai with IT Fixer — Custom gaming PCs, RGB builds, workstation PCs, streaming setups, and high-performance desktops tailored to your needs.",
                        offers: {
                            "@type": "Offer",
                            priceCurrency: "INR",
                            availability: "https://schema.org/InStock",
                            price: "Request Quote",
                        },
                    }),
                }}
            />

            {/* ================= UI ================= */}
            <CustomPcBuild />
        </>
    );
}