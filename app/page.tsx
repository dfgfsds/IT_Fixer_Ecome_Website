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

/* ================= META ================= */
// export async function generateMetadata(): Promise<Metadata> {
//     return {
//         title:
//             "Buy Gaming PCs & Computer Parts Online in Chennai | IT Fixer",

//         description:
//             "Shop high-performance gaming PCs, editing workstations, and streaming setups at IT Fixer. Best prices, expert support, and fast delivery across Chennai & India.",

//         keywords: [
//             "gaming pc Chennai",
//             "custom pc India",
//             "editing workstation Chennai",
//             "streaming pc India",
//             "computer shop Chennai",
//             "IT Fixer computers",
//             "gaming setup India",
//         ],

//         alternates: {
//             canonical: "https://www.itfixer.in/",
//         },

//         openGraph: {
//             type: "website",
//             title: "Gaming PCs & Computer Parts | IT Fixer Chennai",
//             description:
//                 "Build your dream gaming or editing PC with IT Fixer. Best prices and fast delivery across India.",
//             url: "https://www.itfixer.in/",
//             siteName: "IT Fixer",
//             locale: "en_IN",
//             images: [
//                 {
//                     url: "https://www.itfixer.in/assets/img/logo.png",
//                     width: 1200,
//                     height: 630,
//                     alt: "IT Fixer Gaming PCs",
//                 },
//             ],
//         },

//         twitter: {
//             card: "summary_large_image",
//             title: "Gaming PCs Online | IT Fixer Chennai",
//             description:
//                 "Shop gaming, editing & streaming PCs with best deals in India.",
//             images: ["https://www.itfixer.in/assets/img/logo.png"],
//         },
//     };
// }


export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Best Gaming PC Shop in Chennai | Gaming, Streaming & Editing PCs",

    description:
      "IT Fixer is the best gaming PC shop in Chennai offering custom gaming PCs, streaming PCs, gaming laptops and editing computers.",

    keywords: [
      "gaming shop in chennai",
      "gaming laptop store in chennai",
      "gaming pc shop in chennai",
      "custom gaming pc chennai",
      "gaming pc in chennai",
      "gaming laptop chennai",
      "streaming pc chennai",
      "editing workstation chennai",
      "video editing pc in chennai",
      "creator pc chennai",
      "esports gaming pc in chennai",
      "high performance pc in chennai",
      "gaming desktop in chennai",
      "RTX gaming pc chennai",
      "gaming computer store in chennai",
      "gaming accessories in chennai",
      "workstation pc in chennai",
      "gaming setup chennai",
      "gaming store in chennai",
      "computer shop in chennai",
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
      title:
        "Best Gaming PC Shop in Chennai | Gaming, Streaming & Editing PCs",
      description:
        "Custom Gaming PCs, Streaming PCs, Gaming Laptops and Editing Workstations in Chennai with expert support and premium components.",
      url: "https://www.itfixer.in/",
      siteName: "IT Fixer",
      locale: "en_IN",
      images: [
        {
          url: "https://www.itfixer.in/assets/img/logo.png",
          width: 1200,
          height: 630,
          alt: "Gaming PC Shop in Chennai - IT Fixer",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title:
        "Best Gaming PC Shop in Chennai | Gaming, Streaming & Editing PCs",
      description:
        "Custom Gaming PCs, Streaming PCs, Gaming Laptops and Editing Workstations in Chennai.",
      images: [
        "https://www.itfixer.in/assets/img/logo.png",
      ],
      site: "@itfixer7",
      creator: "@itfixer7",
    },

    other: {
      image_src:
        "https://www.itfixer.in/assets/img/logo.png",

      "geo.region": "IN-TN",
      "geo.placename": "Chennai",
      "geo.position": "13.0827;80.2707",
      ICBM: "13.0827,80.2707",

      author: "IT Fixer",
      publisher: "IT Fixer",
      distribution: "global",
      rating: "general",
      "revisit-after": "7 days",
      "theme-color": "#000000",

      subject: "Gaming PCs, Streaming PCs and Editing Workstations",
      topic: "Gaming PC Shop in Chennai",
      summary:
        "Custom Gaming PCs, Streaming PCs, Gaming Laptops and Editing Workstations in Chennai.",
      classification:
        "Gaming Computers, Workstations, Gaming Laptops",
      coverage: "Chennai, Tamil Nadu, India",
      target:
        "Gamers, Streamers, Video Editors, Content Creators, Esports Players",
      audience:
        "Gamers, Streamers, Video Editors, Content Creators",
    },
  };
}

export default function Home() {
    return (
        <div>

            {/* ================= GRAPH SCHEMA (HEAD) ================= */}

            {/* <Script
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
                                image: "https://www.itfixer.in/img/logo.png",
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
            /> */}

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
                                "name": "IT FIXER",
                                "url": "https://www.itfixer.in/",
                                "logo": "https://www.itfixer.in/assets/images/logo.png",
                                "description":
                                    "Gaming PC Shop in Chennai specializing in Gaming PCs, Streaming PCs, Gaming Laptops and Editing Workstations.",
                                "telephone": "+91-8585858768",
                                "email": "info@itfixer.in",
                                "sameAs": [
                                    "https://www.facebook.com/itfixer7",
                                    "https://www.instagram.com/it__fixer/",
                                    "https://www.youtube.com/@Itfixer_fix-it-fast",
                                    "https://www.linkedin.com/company/it-fixer-gaming/about/",
                                    "https://x.com/itfixer7"
                                ]
                            },

                            {
                                "@type": "ComputerStore",
                                "@id": "https://www.itfixer.in/#store",
                                "name": "IT FIXER",
                                "image": "https://www.itfixer.in/assets/images/store.jpg",
                                "url": "https://www.itfixer.in/",
                                "telephone": "+91-8585858768",
                                "email": "info@itfixer.in",
                                "priceRange": "₹₹",
                                "description":
                                    "IT Fixer is a trusted computer store in Chennai offering gaming PCs, editing workstations, streaming setups, custom PC builds and accessories.",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress":
                                        "New No.29, Old No.31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet, Ashok Nagar",
                                    "addressLocality": "Chennai",
                                    "addressRegion": "Tamil Nadu",
                                    "postalCode": "600083",
                                    "addressCountry": "IN"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": "13.0318",
                                    "longitude": "80.2115"
                                },
                                "openingHours": "Mo-Sa 09:00-21:00",
                                "sameAs": [
                                    "https://www.facebook.com/itfixer7",
                                    "https://www.instagram.com/it__fixer/",
                                    "https://www.youtube.com/@Itfixer_fix-it-fast",
                                    "https://www.linkedin.com/company/it-fixer-gaming/about/",
                                    "https://x.com/itfixer7"
                                ]
                            },

                            {
                                "@type": "WebSite",
                                "@id": "https://www.itfixer.in/#website",
                                "url": "https://www.itfixer.in/",
                                "name": "IT FIXER",
                                "publisher": {
                                    "@id": "https://www.itfixer.in/#organization"
                                }
                            },

                            {
                                "@type": "FAQPage",
                                "@id": "https://www.itfixer.in/#faq",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Why is IT Fixer considered one of the best gaming shops in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "IT Fixer is a leading gaming shop in Chennai offering custom gaming PCs, gaming laptops, streaming PCs and video editing workstations."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can I build a custom gaming PC at IT Fixer?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes. IT Fixer specializes in custom gaming PC builds in Chennai tailored to your gaming requirements and budget."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you offer PCs for streaming and content creation?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Absolutely. We build high-performance streaming PCs for YouTube, Twitch, Facebook Gaming, podcasting and professional content creation."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Which PC configuration is best for video editing and content creation?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "IT Fixer offers professional editing workstations powered by Intel Core and AMD Ryzen processors, NVIDIA RTX graphics cards, DDR5 RAM and high-speed NVMe SSDs."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do you sell gaming laptops in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes. IT Fixer offers a wide range of gaming laptops in Chennai from leading brands with RTX graphics and high-refresh-rate displays."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What gaming hardware and accessories are available at IT Fixer?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "We offer gaming graphics cards, gaming monitors, gaming keyboards, gaming mice, gaming headsets, DDR5 RAM, NVMe SSDs, liquid cooling solutions and gaming accessories."
                                        }
                                    }
                                ]
                            }
                        ]
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
                <WhyChooseITFixer />

                <NewsSection />
                {/* <WhyChooseITFixer /> */}
                {/* <RepairBannerSection /> */}
            </div>

        </div>

    );
}