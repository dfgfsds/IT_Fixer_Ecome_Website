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

/* ================= META ================= */
export async function generateMetadata(): Promise<Metadata> {
    return {
        title:
            "Buy Gaming PCs & Computer Parts Online in Chennai | IT Fixer",

        description:
            "Shop high-performance gaming PCs, editing workstations, and streaming setups at IT Fixer. Best prices, expert support, and fast delivery across Chennai & India.",

        keywords: [
            "gaming pc Chennai",
            "custom pc India",
            "editing workstation Chennai",
            "streaming pc India",
            "computer shop Chennai",
            "IT Fixer computers",
            "gaming setup India",
        ],

        alternates: {
            canonical: "https://www.itfixer.in/",
        },

        openGraph: {
            type: "website",
            title: "Gaming PCs & Computer Parts | IT Fixer Chennai",
            description:
                "Build your dream gaming or editing PC with IT Fixer. Best prices and fast delivery across India.",
            url: "https://www.itfixer.in/",
            siteName: "IT Fixer",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/home-2/about/line-shape.png",
                    width: 1200,
                    height: 630,
                    alt: "IT Fixer Gaming PCs",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Gaming PCs Online | IT Fixer Chennai",
            description:
                "Shop gaming, editing & streaming PCs with best deals in India.",
            images: ["https://www.itfixer.in/assets/img/home-2/about/line-shape.png"],
        },
    };
}

export default function Home() {
    return (
        <div>

            {/* ================= GRAPH SCHEMA (HEAD) ================= */}
            <Script
                id="schema-graph"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                "@id": "https://www.itfixer.in/#organization",
                                name: "IT FIXER",
                                url: "https://www.itfixer.in/",
                                logo: "https://www.itfixer.in/assets/img/logo.png",
                                email: "info@itfixer.in",
                                telephone: "+91 8585858768",
                                sameAs: [
                                    "https://www.instagram.com/it__fixer/",
                                    "https://www.facebook.com/itfixer7/",
                                    "https://www.youtube.com/@Itfixer_fix-it-fast",
                                    "https://x.com/itfixer7",
                                    "https://www.reddit.com/user/Itfixer_fix-it-fast/",
                                    "https://www.threads.com/@it__fixer",
                                    "https://www.linkedin.com/in/it-fixer-/",
                                    "https://in.pinterest.com/itfixer7/",
                                ],
                            },
                            {
                                "@type": "ComputerStore",
                                "@id": "https://www.itfixer.in/#store",
                                name: "IT FIXER",
                                image: "https://www.itfixer.in/logo.png",
                                url: "https://www.itfixer.in/",
                                telephone: "+91 8585858768",
                                email: "info@itfixer.in",
                                priceRange: "₹₹",
                                description:
                                    "IT Fixer is a trusted computer store in Chennai offering gaming PCs, editing workstations, streaming setups, custom PC builds, and accessories.",
                                address: {
                                    "@type": "PostalAddress",
                                    streetAddress:
                                        "New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet, Ashok Nagar",
                                    addressLocality: "Chennai",
                                    addressRegion: "Tamil Nadu",
                                    postalCode: "600083",
                                    addressCountry: "IN",
                                },
                                areaServed: {
                                    "@type": "Country",
                                    name: "India",
                                },
                                openingHoursSpecification: [
                                    {
                                        "@type": "OpeningHoursSpecification",
                                        dayOfWeek: [
                                            "Monday",
                                            "Tuesday",
                                            "Wednesday",
                                            "Thursday",
                                            "Friday",
                                            "Saturday",
                                        ],
                                        opens: "10:00",
                                        closes: "22:00",
                                    },
                                    {
                                        "@type": "OpeningHoursSpecification",
                                        dayOfWeek: "Sunday",
                                        opens: "10:00",
                                        closes: "21:00",
                                    },
                                ],
                                sameAs: [
                                    "https://www.instagram.com/it__fixer/",
                                    "https://www.facebook.com/itfixer7/",
                                ],
                                parentOrganization: {
                                    "@id": "https://www.itfixer.in/#organization",
                                },
                            },
                            {
                                "@type": "WebSite",
                                "@id": "https://www.itfixer.in/#website",
                                url: "https://www.itfixer.in/",
                                name: "IT FIXER",
                                publisher: {
                                    "@id": "https://www.itfixer.in/#organization",
                                },
                            },
                        ],
                    }),
                }}
            />

            {/* <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="P" className="letters-loading">
                            P
                        </span>
                        <span data-text-preloader="U" className="letters-loading">
                            U
                        </span>
                        <span data-text-preloader="B" className="letters-loading">
                            B
                        </span>
                        <span data-text-preloader="Z" className="letters-loading">
                            Z
                        </span>
                        <span data-text-preloader="I" className="letters-loading">
                            I
                        </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div id="smooth-content">
                <HeroSection />
                <BrandSection />
                <AboutSection />

                {/* <VideoSection /> */}
                <BestGameSection />
                <TrendingSection />
                <TestimonialSection />
                {/* <SponsorSection /> */}
                {/* <TeamMemberSection /> */}
                <NewsSection />
                {/* <RepairBannerSection /> */}
            </div>

        </div>

    );
}