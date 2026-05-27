import { Metadata } from "next";
import AboutPage from "./Client";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "About IT Fixer | Trusted Gaming PC Store in Chennai",

        description:
            "Learn about ITFixer, Chennai’s trusted gaming PC shop specializing in custom PC builds, high-performance desktops, repairs, and expert tech support.",

        robots: "index, follow",

        keywords: [
            "about IT Fixer Chennai",
            "computer shop Chennai",
            "gaming pc store India",
            "ITFixer",
            "about ITFixer",
            "gaming PC shop Chennai",
            "custom PC builder Chennai",
            "high performance PCs",
            "gaming desktops Chennai",
            "PC repair Chennai"
        ],

        alternates: {
            canonical: "https://www.itfixer.in/about",
        },

        openGraph: {
            type: "website",
            title: "About IT Fixer | Gaming PC Store Chennai",
            description:
                "Learn about ITFixer, Chennai’s trusted gaming PC shop specializing in custom PC builds, high-performance desktops, repairs, and expert tech support.",
            url: "https://www.itfixer.in/about",
            siteName: "IT Fixer",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "About IT Fixer",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "About IT Fixer Chennai",
            description:
                "Trusted gaming PC and computer components store in Chennai.",
            images: ["https://www.itfixer.in/assets/img/home-3/top-feature.png"],
        },
    };
}

export default function Page() {
    return (
        <>
            {/* Schema (About Page SEO boost 🔥) */}
            <Script
                id="about-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "ITFixer",
                        "url": "https://www.itfixer.in/about",
                        "logo": "https://www.itfixer.in/assets/img/logo.png",
                        "description":
                            "ITFixer is Chennai’s trusted gaming PC shop offering custom PC builds, high-end gaming desktops, PC repairs, upgrades, and expert technical support.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress":
                                "New No.29, Old No.31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet (Opp. Kasi Theatre), Ashok Nagar",
                            "addressLocality": "Chennai",
                            "postalCode": "600083",
                            "addressRegion": "Tamil Nadu",
                            "addressCountry": "IN",
                        },
                        "telephone": "+91 8585858768",
                        "email": "info@itfixer.in",
                        "sameAs": [
                            "https://www.facebook.com/itfixer7",
                            "https://www.instagram.com/it__fixer/",
                            "https://www.youtube.com/@Itfixer_fix-it-fast",
                            "https://www.linkedin.com/company/it-fixer-gaming/about/",
                            "https://x.com/itfixer7",
                        ],
                    }),
                }}
            />

            <AboutPage />
        </>
    );
}