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
                                        "name": "Where can I find an affordable gaming pc builder in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "IT Fixer helps you compare a prebuilt pc in Chennai with custom gaming configurations based on your budget, preferred games and performance needs.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How do I choose a custom gaming pc build in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Compare component compatibility, gaming performance and upgrade options. A prebuild store in Chennai can also help you evaluate ready-made systems.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Where can I get expert advice for gaming pc in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "IT Fixer helps gamers choose suitable desktops, gaming laptops and hardware upgrades based on their preferred games and performance requirements.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Which gaming store in Chennai offers gaming and streaming setups?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "IT Fixer offers gaming PCs, streaming systems and editing computers. You can visit a prebuild pc shop in Chennai to compare ready-to-use desktops for your needs.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Where can I find a reliable gaming shop Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Contact IT Fixer to discuss gaming hardware, system configurations and technical support before choosing a PC.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Where can I buy affordable PC accessories in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "IT Fixer can help you explore keyboards, mice, monitors, headsets and streaming equipment. A pc accessories shop in Chennai can help you select compatible peripherals for your setup.",
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