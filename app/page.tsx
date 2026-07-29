// import { Metadata } from "next";
// import Script from "next/script";

// import { Search } from "lucide-react";

// import HeroSection from "@/components/HeroSection";
// import BrandSection from "@/components/BrandSection";
// import AboutSection from "@/components/AboutSection";
// import VideoSection from "@/components/VideoSection";
// import BestGameSection from "@/components/BestGameSection";
// import TrendingSection from "@/components/TrendingSection";
// import TestimonialSection from "@/components/TestimonialSection";
// import SponsorSection from "@/components/SponsorSection";
// import TeamMemberSection from "@/components/TeamMemberSection";
// import NewsSection from "@/components/NewsSection";
// import RepairBannerSection from "@/components/RepairBannerSection";
// import WhyChooseITFixer from "@/components/WhyChooseITFixer";

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title:
//       "Best Gaming PC Shop in Chennai | Gaming, Streaming & Editing PCs",

//     description:
//       "IT Fixer is the best gaming PC shop in Chennai offering custom gaming PCs, streaming PCs, gaming laptops and editing computers.",

//     keywords: [
//       "gaming shop in chennai",
//       "gaming laptop store in chennai",
//       "gaming pc shop in chennai",
//       "custom gaming pc chennai",
//       "gaming pc in chennai",
//       "gaming laptop chennai",
//       "streaming pc chennai",
//       "editing workstation chennai",
//       "video editing pc in chennai",
//       "creator pc chennai",
//       "esports gaming pc in chennai",
//       "high performance pc in chennai",
//       "gaming desktop in chennai",
//       "RTX gaming pc chennai",
//       "gaming computer store in chennai",
//       "gaming accessories in chennai",
//       "workstation pc in chennai",
//       "gaming setup chennai",
//       "gaming store in chennai",
//       "computer shop in chennai",
//     ],

//     robots: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },

//     alternates: {
//       canonical: "https://www.itfixer.in/",
//     },

//     openGraph: {
//       type: "website",
//       title:
//         "Best Gaming PC Shop in Chennai | Gaming, Streaming & Editing PCs",
//       description:
//         "Custom Gaming PCs, Streaming PCs, Gaming Laptops and Editing Workstations in Chennai with expert support and premium components.",
//       url: "https://www.itfixer.in/",
//       siteName: "IT Fixer",
//       locale: "en_IN",
//       images: [
//         {
//           url: "https://www.itfixer.in/assets/img/logo.png",
//           width: 1200,
//           height: 630,
//           alt: "Gaming PC Shop in Chennai - IT Fixer",
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title:
//         "Best Gaming PC Shop in Chennai | Gaming, Streaming & Editing PCs",
//       description:
//         "Custom Gaming PCs, Streaming PCs, Gaming Laptops and Editing Workstations in Chennai.",
//       images: [
//         "https://www.itfixer.in/assets/img/logo.png",
//       ],
//       site: "@itfixer7",
//       creator: "@itfixer7",
//     },

//     other: {
//       image_src:
//         "https://www.itfixer.in/assets/img/logo.png",

//       "geo.region": "IN-TN",
//       "geo.placename": "Chennai",
//       "geo.position": "13.0827;80.2707",
//       ICBM: "13.0827,80.2707",

//       author: "IT Fixer",
//       publisher: "IT Fixer",
//       distribution: "global",
//       rating: "general",
//       "revisit-after": "7 days",
//       "theme-color": "#000000",

//       subject: "Gaming PCs, Streaming PCs and Editing Workstations",
//       topic: "Gaming PC Shop in Chennai",
//       summary:
//         "Custom Gaming PCs, Streaming PCs, Gaming Laptops and Editing Workstations in Chennai.",
//       classification:
//         "Gaming Computers, Workstations, Gaming Laptops",
//       coverage: "Chennai, Tamil Nadu, India",
//       target:
//         "Gamers, Streamers, Video Editors, Content Creators, Esports Players",
//       audience:
//         "Gamers, Streamers, Video Editors, Content Creators",
//     },
//   };
// }

// export default function Home() {
//     return (
//         <div>

//             <Script
//                 id="schema-graph"
//                 type="application/ld+json"
//                 strategy="beforeInteractive"
//                 dangerouslySetInnerHTML={{
//                     __html: JSON.stringify({
//                         "@context": "https://schema.org",
//                         "@graph": [
//                             {
//                                 "@type": "Organization",
//                                 "@id": "https://www.itfixer.in/#organization",
//                                 "name": "IT FIXER",
//                                 "url": "https://www.itfixer.in/",
//                                 "logo": "https://www.itfixer.in/assets/images/logo.png",
//                                 "description":
//                                     "Gaming PC Shop in Chennai specializing in Gaming PCs, Streaming PCs, Gaming Laptops and Editing Workstations.",
//                                 "telephone": "+91-8585858768",
//                                 "email": "info@itfixer.in",
//                                 "sameAs": [
//                                     "https://www.facebook.com/itfixer7",
//                                     "https://www.instagram.com/it__fixer/",
//                                     "https://www.youtube.com/@Itfixer_fix-it-fast",
//                                     "https://www.linkedin.com/company/it-fixer-gaming/about/",
//                                     "https://x.com/itfixer7"
//                                 ]
//                             },

//                             {
//                                 "@type": "ComputerStore",
//                                 "@id": "https://www.itfixer.in/#store",
//                                 "name": "IT FIXER",
//                                 "image": "https://www.itfixer.in/assets/images/store.jpg",
//                                 "url": "https://www.itfixer.in/",
//                                 "telephone": "+91-8585858768",
//                                 "email": "info@itfixer.in",
//                                 "priceRange": "₹₹",
//                                 "description":
//                                     "IT Fixer is a trusted computer store in Chennai offering gaming PCs, editing workstations, streaming setups, custom PC builds and accessories.",
//                                 "address": {
//                                     "@type": "PostalAddress",
//                                     "streetAddress":
//                                         "New No.29, Old No.31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet, Ashok Nagar",
//                                     "addressLocality": "Chennai",
//                                     "addressRegion": "Tamil Nadu",
//                                     "postalCode": "600083",
//                                     "addressCountry": "IN"
//                                 },
//                                 "geo": {
//                                     "@type": "GeoCoordinates",
//                                     "latitude": "13.0318",
//                                     "longitude": "80.2115"
//                                 },
//                                 "openingHours": "Mo-Sa 09:00-21:00",
//                                 "sameAs": [
//                                     "https://www.facebook.com/itfixer7",
//                                     "https://www.instagram.com/it__fixer/",
//                                     "https://www.youtube.com/@Itfixer_fix-it-fast",
//                                     "https://www.linkedin.com/company/it-fixer-gaming/about/",
//                                     "https://x.com/itfixer7"
//                                 ]
//                             },

//                             {
//                                 "@type": "WebSite",
//                                 "@id": "https://www.itfixer.in/#website",
//                                 "url": "https://www.itfixer.in/",
//                                 "name": "IT FIXER",
//                                 "publisher": {
//                                     "@id": "https://www.itfixer.in/#organization"
//                                 }
//                             },

//                             {
//                                 "@type": "FAQPage",
//                                 "@id": "https://www.itfixer.in/#faq",
//                                 "mainEntity": [
//                                     {
//                                         "@type": "Question",
//                                         "name": "Why is IT Fixer considered one of the best gaming shops in Chennai?",
//                                         "acceptedAnswer": {
//                                             "@type": "Answer",
//                                             "text": "IT Fixer is a leading gaming shop in Chennai offering custom gaming PCs, gaming laptops, streaming PCs and video editing workstations."
//                                         }
//                                     },
//                                     {
//                                         "@type": "Question",
//                                         "name": "Can I build a custom gaming PC at IT Fixer?",
//                                         "acceptedAnswer": {
//                                             "@type": "Answer",
//                                             "text": "Yes. IT Fixer specializes in custom gaming PC builds in Chennai tailored to your gaming requirements and budget."
//                                         }
//                                     },
//                                     {
//                                         "@type": "Question",
//                                         "name": "Do you offer PCs for streaming and content creation?",
//                                         "acceptedAnswer": {
//                                             "@type": "Answer",
//                                             "text": "Absolutely. We build high-performance streaming PCs for YouTube, Twitch, Facebook Gaming, podcasting and professional content creation."
//                                         }
//                                     },
//                                     {
//                                         "@type": "Question",
//                                         "name": "Which PC configuration is best for video editing and content creation?",
//                                         "acceptedAnswer": {
//                                             "@type": "Answer",
//                                             "text": "IT Fixer offers professional editing workstations powered by Intel Core and AMD Ryzen processors, NVIDIA RTX graphics cards, DDR5 RAM and high-speed NVMe SSDs."
//                                         }
//                                     },
//                                     {
//                                         "@type": "Question",
//                                         "name": "Do you sell gaming laptops in Chennai?",
//                                         "acceptedAnswer": {
//                                             "@type": "Answer",
//                                             "text": "Yes. IT Fixer offers a wide range of gaming laptops in Chennai from leading brands with RTX graphics and high-refresh-rate displays."
//                                         }
//                                     },
//                                     {
//                                         "@type": "Question",
//                                         "name": "What gaming hardware and accessories are available at IT Fixer?",
//                                         "acceptedAnswer": {
//                                             "@type": "Answer",
//                                             "text": "We offer gaming graphics cards, gaming monitors, gaming keyboards, gaming mice, gaming headsets, DDR5 RAM, NVMe SSDs, liquid cooling solutions and gaming accessories."
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }),
//                 }}
//             />

//             {/* <div id="preloader" className="preloader">
//                 <div className="animation-preloader">
//                     <div className="spinner">
//                     </div>
//                     <div className="txt-loading">
//                         <span data-text-preloader="P" className="letters-loading">
//                             P
//                         </span>
//                         <span data-text-preloader="U" className="letters-loading">
//                             U
//                         </span>
//                         <span data-text-preloader="B" className="letters-loading">
//                             B
//                         </span>
//                         <span data-text-preloader="Z" className="letters-loading">
//                             Z
//                         </span>
//                         <span data-text-preloader="I" className="letters-loading">
//                             I
//                         </span>
//                     </div>
//                     <p className="text-center">Loading</p>
//                 </div>
//                 <div className="loader">
//                     <div className="row">
//                         <div className="col-3 loader-section section-left">
//                             <div className="bg"></div>
//                         </div>
//                         <div className="col-3 loader-section section-left">
//                             <div className="bg"></div>
//                         </div>
//                         <div className="col-3 loader-section section-right">
//                             <div className="bg"></div>
//                         </div>
//                         <div className="col-3 loader-section section-right">
//                             <div className="bg"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}


//             <div id="smooth-content">
//                 <HeroSection />
//                 <BrandSection />
//                 <AboutSection />
//                 {/* <VideoSection /> */}
//                 <BestGameSection />
//                 <TrendingSection />
//                 <TestimonialSection />
//                 {/* <SponsorSection /> */}
//                 {/* <TeamMemberSection /> */}
//                 <WhyChooseITFixer />

//                 <NewsSection />
//                 {/* <WhyChooseITFixer /> */}
//                 {/* <RepairBannerSection /> */}
//             </div>

//         </div>

//     );
// }



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
        title: "Best Gaming PC Builder in Chennai | Streaming & Editing PCs",

        description:
            "Build custom gaming PCs, streaming rigs and editing works setups in Chennai with IT Fixer. Get genuine parts, expert guidance and local upgrade support.",

        keywords: [
            "gaming PC shop in Chennai",
            "streaming PC build in Chennai",
            "editing PC setup Chennai",
            "video editing PC Chennai",
            "gaming computer store in Chennai",
            "RTX gaming PC Chennai",
            "PC assembling Chennai",
            "gaming laptop Chennai",
            "PC upgrade Chennai",
            "creator setup in Chennai",
            "high performance PC Chennai",
            "Ashok Nagar PC shop",
            "Jafferkhanpet computer shop",
            "gaming pc builder in chennai",
            "esports gaming PC Chennai",
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
            title: "Best Gaming PC Builder in Chennai | Streaming & Editing PCs",
            description:
                "Build custom gaming PCs, streaming rigs and editing setups in Chennai with IT Fixer. Get genuine parts, expert guidance and local upgrade support.",
            url: "https://www.itfixer.in/",
            siteName: "IT Fixer",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    alt: "IT Fixer custom gaming PC builder in Chennai",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Best Gaming PC Builder in Chennai | Streaming & Editing PCs",
            description:
                "Build custom gaming PCs, streaming rigs and editing setups in Chennai with IT Fixer. Get genuine parts, expert guidance and local upgrade support.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },

        other: {
            image_src: "https://www.itfixer.in/assets/img/logo.png",

            "geo.region": "IN-TN",
            "geo.placename": "Chennai",
            coverage: "Chennai, Ashok Nagar, Jafferkhanpet, Tamil Nadu",
            target:
                "gamers, streamers, video editors, content creators, PC buyers in Chennai",

            subject:
                "Custom gaming PCs, streaming PCs and editing setups builds in Chennai",
            abstract:
                "IT Fixer helps gamers, streamers, video editors and creators in Chennai build custom PCs, upgrade systems and choose genuine PC components.",
            "page-topic":
                "Gaming PC, Streaming PC, Editing PC, Custom PC Build Chennai",
            audience:
                "Gamers, YouTubers, streamers, video editors, freelancers, students and creative professionals",
        },
    };
}

export default function Home() {
    return (
        <div>
            <Script
                id="schema-graph"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Where can I find a reliable gaming PC builder in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "You can visit IT Fixer if you are looking for a reliable gaming PC build in Chennai. The team helps you choose parts based on the games you play, your monitor resolution, FPS expectation and budget, instead of suggesting the same configuration for every customer.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Should I buy a gaming PC to stream games and make videos for YouTube?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes. A gaming and streaming PC requires a well-balanced system because the PC must run the game, recording software, webcam, microphone and live stream at the same time. IT Fixer can help beginners and regular streamers choose a suitable gaming PC build in Chennai based on their usage and budget.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What type of PC is good for video editing?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "For video editing, you need a good processor, enough RAM, fast SSD storage and a suitable graphics card. At IT Fixer, editing PCs are planned based on your work, such as reels, YouTube videos, wedding editing, product videos, 4K projects or studio work.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Do I need to buy a new PC, or can I upgrade my old one?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "You may not always need a new PC. If your current system is still usable, upgrades like SSD, RAM, graphics card, cooling or power supply changes can improve performance. IT Fixer offers upgrade support in Chennai to check your requirements and suggest whether upgrading or replacing makes more sense.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Does IT Fixer sell gaming PC parts and gaming laptops in Chennai?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes. Along with custom PC assembling, IT Fixer helps customers looking for gaming laptops, creator laptops and computer upgrade parts. Customers can also find graphics cards, SSDs, RAM, motherboards and other gaming PC components based on availability.",
                                        },
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Why should I visit a computer store in Chennai instead of buying PC parts online?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Online buying is useful, but a custom PC build needs proper part matching. A wrong motherboard, weak power supply, poor airflow cabinet or low RAM choice can affect performance later. At a local computer store like IT Fixer, you can discuss your usage directly and get guidance before spending money.",
                                        },
                                    },
                                ],
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "@id": "https://www.itfixer.in/#organization",
                                "name": "IT Fixer",
                                "legalName": "Sigmah Enterprises",
                                "url": "https://www.itfixer.in/",
                                "logo": "https://www.itfixer.in/assets/img/logo.png",
                                "image": "https://www.itfixer.in/assets/img/logo.png",
                                "description":
                                    "IT Fixer is a Chennai-based computer store for custom gaming PCs, streaming PCs, editing setups, gaming laptops, PC components and upgrade support.",
                                "email": "info@itfixer.in",
                                "telephone": "+91 8585858768",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress":
                                        "New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet, Opposite Kasi Theatre, Ashok Nagar",
                                    "addressLocality": "Chennai",
                                    "addressRegion": "Tamil Nadu",
                                    "postalCode": "600083",
                                    "addressCountry": "IN",
                                },
                                "sameAs": [
                                    "https://www.facebook.com/itfixer7",
                                    "https://www.instagram.com/it__fixer",
                                    "https://www.youtube.com/@Itfixer_fix-it-fast",
                                    "https://www.linkedin.com/company/it-fixer-gaming",
                                ],
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "@id": "https://www.itfixer.in/#service",
                                "name": "Custom Gaming PC, Streaming PC and Editing Build in Chennai",
                                "serviceType":
                                    "Custom PC Build, Gaming PC Build, Streaming PC Setup, Editing PC build, PC Upgrade Support",
                                "description":
                                    "IT Fixer helps customers in Chennai build and upgrade gaming PCs, streaming PCs, editing PCs, creator setup and high-performance computer systems based on real usage, budget and future upgrade needs.",
                                "provider": {
                                    "@type": "Organization",
                                    "@id": "https://www.itfixer.in/#organization",
                                    "name": "IT Fixer",
                                    "url": "https://www.itfixer.in/",
                                },
                                "areaServed": [
                                    {
                                        "@type": "City",
                                        "name": "Chennai",
                                    },
                                    {
                                        "@type": "Place",
                                        "name": "Ashok Nagar",
                                    },
                                    {
                                        "@type": "Place",
                                        "name": "Jafferkhanpet",
                                    },
                                    {
                                        "@type": "State",
                                        "name": "Tamil Nadu",
                                    },
                                ],
                                "audience": {
                                    "@type": "Audience",
                                    "audienceType":
                                        "Gamers, streamers, YouTubers, video editors, content creators, students, freelancers and professionals",
                                },
                                "hasOfferCatalog": {
                                    "@type": "OfferCatalog",
                                    "name": "IT Fixer PC Build Services",
                                    "itemListElement": [
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Custom Gaming PC Build",
                                            },
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Streaming PC Setup",
                                            },
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "Editing PC and Creator Setup",
                                            },
                                        },
                                        {
                                            "@type": "Offer",
                                            "itemOffered": {
                                                "@type": "Service",
                                                "name": "PC Upgrade Support",
                                            },
                                        },
                                    ],
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
                            {
                                "@context": "https://schema.org",
                                "@type": "WebPage",
                                "@id": "https://www.itfixer.in/#webpage",
                                "url": "https://www.itfixer.in/",
                                "name": "Gaming PC Builder in Chennai | Streaming & Editing PCs",
                                "headline": "Best Gaming, Streaming & Editing PC Shop in Chennai",
                                "description":
                                    "Build custom gaming PCs, streaming rigs and editing Setups in Chennai with IT Fixer. Get genuine parts, expert guidance and local upgrade support.",
                                "inLanguage": "en-IN",
                                "isPartOf": {
                                    "@type": "WebSite",
                                    "@id": "https://www.itfixer.in/#website",
                                    "name": "IT Fixer",
                                    "url": "https://www.itfixer.in/",
                                },
                                "about": [
                                    {
                                        "@type": "Thing",
                                        "name": "Custom Gaming PC Build",
                                    },
                                    {
                                        "@type": "Thing",
                                        "name": "Streaming PC",
                                    },
                                    {
                                        "@type": "Thing",
                                        "name": "Editing PC",
                                    },
                                    {
                                        "@type": "Thing",
                                        "name": "Gaming Laptop and PC Upgrade Support",
                                    },
                                ],
                                "primaryImageOfPage": {
                                    "@type": "ImageObject",
                                    "url": "https://www.itfixer.in/assets/img/logo.png",
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "@id": "https://www.itfixer.in/#organization",
                                    "name": "IT Fixer",
                                },
                                "speakable": {
                                    "@type": "SpeakableSpecification",
                                    "cssSelector": ["h1", "h2", ".faq"],
                                },
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "ComputerStore",
                                "@id": "https://www.itfixer.in/#localbusiness",
                                "name": "IT Fixer",
                                "image": "https://www.itfixer.in/assets/img/logo.png",
                                "logo": "https://www.itfixer.in/assets/img/logo.png",
                                "url": "https://www.itfixer.in/",
                                "telephone": "+91 8585858768",
                                "email": "info@itfixer.in",
                                "openingHours": "Mo-Sa 09:00am-09:00pm",
                                "priceRange": "₹₹",
                                "description":
                                    "IT Fixer is a gaming PC and computer store in Chennai offering custom gaming PCs, streaming PCs, editing Setups, gaming laptops, PC components and upgrade support.",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress":
                                        "New No 29, Old No 31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet, Opposite Kasi Theatre, Ashok Nagar",
                                    "addressLocality": "Chennai",
                                    "addressRegion": "Tamil Nadu",
                                    "postalCode": "600083",
                                    "addressCountry": "IN",
                                },
                                "areaServed": [
                                    "Chennai",
                                    "Ashok Nagar",
                                    "Jafferkhanpet",
                                    "Tamil Nadu",
                                ],
                                "paymentAccepted": [
                                    "Cash",
                                    "UPI",
                                    "Credit Card",
                                    "Debit Card",
                                    "Bank Transfer",
                                ],
                                "makesOffer": [
                                    {
                                        "@type": "Offer",
                                        "name": "Custom Gaming PC Build",
                                    },
                                    {
                                        "@type": "Offer",
                                        "name": "Streaming PC Build",
                                    },
                                    {
                                        "@type": "Offer",
                                        "name": "Editing PC setups",
                                    },
                                    {
                                        "@type": "Offer",
                                        "name": "PC Components and Upgrades",
                                    },
                                ],
                                "sameAs": [
                                    "https://www.facebook.com/itfixer7",
                                    "https://www.instagram.com/it__fixer",
                                    "https://www.youtube.com/@Itfixer_fix-it-fast",
                                    "https://www.linkedin.com/company/it-fixer-gaming",
                                ],
                            },
                        ],
                    }),
                }}
            />

            <div id="smooth-content">
                <HeroSection />
                <BrandSection />
                <AboutSection />
                <BestGameSection />
                <TrendingSection />
                <WhyChooseITFixer />
                <TestimonialSection />
                <NewsSection />
            </div>
        </div>
    );
}