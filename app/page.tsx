import { Metadata } from "next";
import Script from "next/script";

import { Search } from "lucide-react";

import HeroSection from "@/components/HeroSection";
import BrandSection from "@/components/BrandSection";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import BestGameSection from "@/components/BestGameSection";
import TrendingSection from "@/components/TrendingSection";
import TestimonialSection from "@/components/TestimonialSection";
import SponsorSection from "@/components/SponsorSection";
import TeamMemberSection from "@/components/TeamMemberSection";
import NewsSection from "@/components/NewsSection";
import RepairBannerSection from "@/components/RepairBannerSection";
import WhyChooseITFixer from "@/components/WhyChooseITFixer";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Best Streaming, Editing & Gaming PCs Builder in Chennai",

        description:
            "Looking for a gaming PC builder in Chennai? Explore custom gaming PCs, streaming setups and editing systems tailored to your budget and performance needs.",

        keywords: [
            "gaming PC builder in Chennai",
            "custom gaming PC",
            "gaming PC shop",
            "streaming PC",
            "video editing workstation",
            "gaming laptops",
            "PC components",
            "PC accessories",
            "custom PC builds",
            "gaming computer store Chennai",
        ],

        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },

        alternates: {
            canonical: "https://www.itfixer.in/",
        },

        openGraph: {
            type: "website",
            siteName: "IT Fixer",
            title: "Best Streaming, Editing & Gaming PCs Builder in Chennai",
            description:
                "Looking for a gaming PC builder in Chennai? Explore custom gaming PCs, streaming setups and editing systems tailored to your budget and performance needs.",
            url: "https://www.itfixer.in/",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    alt: "Custom gaming PCs, streaming setups and editing workstations at IT Fixer in Chennai",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Best Streaming, Editing & Gaming PCs Builder in Chennai",
            description:
                "Looking for a gaming PC builder in Chennai? Explore custom gaming PCs, streaming setups and editing systems tailored to your budget and performance needs.",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    alt: "Gaming PCs and editing workstations from IT Fixer",
                },
            ],
        },

        other: {
            image_src:
                "https://www.itfixer.in/assets/img/logo.png",
        },
    };
}

export default function Home() {
    return (
        <div>
            <script
                id="schema-graph"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "@id": "https://www.itfixer.in/#faq",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Where is the best place to build a custom gaming PC in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "IT Fixer (itfixer.in) is one of Chennai’s premier custom gaming PC builders. We provide transparent part-by-part pricing, genuine branded hardware, professional cable management, BIOS tuning, and full pre-delivery stress testing, plus an Interactive Experience Zone where you can test live gaming rigs before buying.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can I test a gaming or editing PC in Chennai before purchasing?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, at IT Fixer’s Chennai showroom. Our Interactive Experience Zone lets you benchmark real-time FPS, test mechanical peripherals, and experience high-end gaming and 4K video editing workstations hands-on before finalizing your custom build.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How much does a custom gaming PC cost in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Custom gaming PC builds at IT Fixer start around ₹45,000–₹50,000 for entry-level 1080p gaming and scale up to ₹2,50,000+ for flagship 4K RTX gaming and workstation rigs. You get a fully itemized component quote with zero hidden charges.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Where can I buy genuine computer components in Chennai with manufacturer warranty?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "You can buy 100% genuine PC components directly from IT Fixer in Chennai. We stock official-warranty processors, motherboards, graphics cards, RAM, SSDs, cases, and cooling solutions from Intel, AMD, NVIDIA, ASUS, MSI, Gigabyte, Corsair, and Cooler Master.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do I fix a gaming PC that is overheating or dropping FPS in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Bring your rig to IT Fixer Chennai for thermal and performance optimization. Our technicians perform deep dust cleaning, high-grade thermal repasting, airflow rebalancing, and BIOS/driver tuning to restore peak frame rates and lower temperatures.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Where can I buy affordable gaming PCs and computer components in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "IT Fixer Computers (itfixer.in) — located at New No. 29 (Old No. 31 & 32), Anjugam Nagar, 1st Street, Jafferkhanpet (Opposite Kasi Theatre), Ashok Nagar, Chennai 600083 — is a reliable spot for budget gaming rigs and genuine PC parts. They are open Monday to Sunday, 9:00 AM – 9:00 PM, and offer full component-level manufacturer warranties with transparent pricing.",
                                        },
                                    },
                                ],
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                "@id": "https://www.itfixer.in/#website",
                                "url": "https://www.itfixer.in/",
                                "name": "IT Fixer",
                                "description":
                                    "Gaming PCs, custom PC builds, streaming systems, editing workstations, gaming laptops and computer components in Chennai.",
                                "inLanguage": "en-IN",
                                "publisher": {
                                    "@id": "https://www.itfixer.in/#localbusiness",
                                },
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "ComputerStore",
                                "@id": "https://www.itfixer.in/#localbusiness",
                                "name": "IT Fixer",
                                "url": "https://www.itfixer.in/",
                                "description":
                                    "IT Fixer, powered by Sigmah Enterprises, offers custom gaming PCs, gaming laptops, streaming PCs, editing workstations, PC components, accessories and computer upgrade services in Chennai.",
                                "telephone": "+91-8585858768",
                                "email": "info@itfixer.in",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress":
                                        "New No. 29, Old No. 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet, Opposite Kasi Theatre, Ashok Nagar",
                                    "addressLocality": "Chennai",
                                    "addressRegion": "Tamil Nadu",
                                    "postalCode": "600083",
                                    "addressCountry": "IN",
                                },
                                "parentOrganization": {
                                    "@type": "Organization",
                                    "name": "Sigmah Enterprises",
                                },
                                "areaServed": {
                                    "@type": "City",
                                    "name": "Chennai",
                                },
                                "sameAs": [
                                    "https://www.facebook.com/itfixer7",
                                    "https://www.instagram.com/it__fixer/",
                                    "https://www.youtube.com/@Itfixer_fix-it-fast",
                                    "https://x.com/itfixer7",
                                ],
                                "openingHoursSpecification": [
                                    {
                                        "@type": "OpeningHoursSpecification",
                                        "dayOfWeek": [
                                            "Monday",
                                            "Tuesday",
                                            "Wednesday",
                                            "Thursday",
                                            "Friday",
                                            "Saturday",
                                            "Sunday",
                                        ],
                                        "opens": "09:00",
                                        "closes": "21:00",
                                    },
                                ],
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "WebPage",
                                "@id": "https://www.itfixer.in/#webpage",
                                "url": "https://www.itfixer.in/",
                                "name": "Best Streaming, Editing & Gaming PCs Builder in Chennai",
                                "headline":
                                    "Best Gaming, Streaming & Editing PC Shop in Chennai",
                                "description":
                                    "Looking for a gaming PC builder in Chennai? Explore custom gaming PCs, streaming setups and editing systems tailored to your budget and performance needs.",
                                "inLanguage": "en-IN",
                                "isPartOf": {
                                    "@id": "https://www.itfixer.in/#website",
                                },
                                "about": {
                                    "@id": "https://www.itfixer.in/#localbusiness",
                                },
                                "publisher": {
                                    "@id": "https://www.itfixer.in/#localbusiness",
                                },
                                "mainEntity": {
                                    "@id": "https://www.itfixer.in/#localbusiness",
                                },
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "BreadcrumbList",
                                "@id": "https://www.itfixer.in/#breadcrumb",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://www.itfixer.in/",
                                    },
                                ],
                            },
                        ],
                    }),
                }}
            />

            <HeroSection />
            <BrandSection />
            <AboutSection />
            <BestGameSection />
            <TrendingSection />
            <WhyChooseITFixer />
            <TestimonialSection />
            <NewsSection />
        </div>
    );
}