import CustomPcBuild from "./ClientPage";
import { Metadata } from "next";
import Script from "next/script";

/* ================= META (SEO) ================= */
export async function generateMetadata(): Promise<Metadata> {
    return {
        title:
            "Custom PC Build in Chennai | Gaming & Workstation PCs | IT Fixer",

        description:
            "Looking for Custom PC Build in Chennai? Get gaming PCs, workstation builds & budget desktop systems with warranty at IT Fixer.",

        keywords: [
            "Custom PC build in Chennai",
            "gaming PC build Chennai",
            "workstation PC build Chennai",
            "budget gaming PC Chennai",
            "custom desktop computer Chennai",
            "IT Fixer custom PC",
            "PC builder in Chennai",
            "Intel AMD gaming PC Chennai",
            "NVIDIA graphics PC Chennai",
            "video editing workstation Chennai",
            "RGB gaming PC Chennai",
            "affordable gaming PC Chennai",
            "Tamil Nadu PC delivery",
        ],

        alternates: {
            canonical: "https://www.itfixer.in/custom-pc-build",
        },

        openGraph: {
            title:
                "Custom PC Build in Chennai | Gaming & Workstation PCs | IT Fixer",
            description:
                "Build your dream gaming or workstation PC in Chennai with IT Fixer. High performance, genuine components & warranty.",
            url: "https://www.itfixer.in/custom-pc-build",
            type: "website",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/pc-build.webp",
                    width: 1200,
                    height: 630,
                    alt: "Custom PC Build Chennai",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Custom PC Build in Chennai | IT Fixer",
            description:
                "Gaming PCs, workstation builds & budget desktops in Chennai with warranty.",
            images: ["https://www.itfixer.in/assets/img/pc-build.webp"],
        },
    };
}

/* ================= PAGE ================= */
export default function Page() {
    return (
        <>
            {/* ================= FAQ SCHEMA ================= */}
            <Script
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
                                    text: "IT Fixer offers expert guidance, genuine components, professional assembly, stress testing, and reliable after-sales support in Chennai.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Can I customize my PC components?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, you can choose processor, motherboard, RAM, storage, GPU, cooling system, cabinet, and power supply based on your requirements.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How long does it take to build a custom PC?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Most custom PC builds are completed within 1 to 3 business days depending on configuration.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Are custom PCs upgradeable?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, all custom-built PCs are fully upgradeable and future-ready.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide warranty?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, all components come with manufacturer warranty and support.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do you offer budget gaming PC builds?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, IT Fixer offers affordable gaming PC builds optimized for performance.",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* ================= LOCAL BUSINESS SCHEMA ================= */}
            <Script
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ComputerStore",
                        name: "IT Fixer",
                        url: "https://www.itfixer.in",
                        logo: "https://www.itfixer.in/assets/img/logo.png",
                        image: "https://www.itfixer.in/assets/img/pc-build.webp",
                        description:
                            "Custom PC builder in Chennai offering gaming PCs, workstation builds, and desktop computers.",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Chennai",
                            addressRegion: "Tamil Nadu",
                            addressCountry: "India",
                        },
                        areaServed: "Chennai",
                        sameAs: [
                            "https://www.instagram.com/it__fixer/",
                            "https://www.youtube.com/@Itfixer_fix-it-fast",
                        ],
                    }),
                }}
            />

            {/* ================= UI ================= */}
            <CustomPcBuild />
        </>
    );
}