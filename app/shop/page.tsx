import { Metadata } from "next";
import ShopPage from "./Client";
import Script from "next/script";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Gaming PC Builder in Chennai | Custom PCs & Components",

        description:
            "Choose a trusted PC Builder in Chennai for custom gaming, work & high-performance PCs. Explore quality components and create a setup built for your needs.",

        robots: "index, follow",

        keywords: [
            "buy pc parts online India",
            "gaming accessories Chennai",
            "GPU deals India",
            "PC shop Chennai",
            "IT Fixer store",
            "gaming PC shop Chennai",
            "custom PC builds Chennai",
            "ITFixer shop",
            "gaming desktops Chennai",
            "PC components Chennai",
            "buy gaming PC online"
        ],

        alternates: {
            canonical: "https://www.itfixer.in/shop",
        },

        openGraph: {
            type: "website",
            title: "Gaming PC Builder in Chennai | Custom PCs & Components",
            description:
                "Choose a trusted PC Builder in Chennai for custom gaming, work & high-performance PCs. Explore quality components and create a setup built for your needs.",
            url: "https://www.itfixer.in/shop",
            siteName: "IT Fixer",
            locale: "en_IN",
            images: [
                {
                    url: "https://www.itfixer.in/assets/img/logo.png",
                    width: 1200,
                    height: 630,
                    alt: "IT Fixer Shop",
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: "Gaming PC Builder in Chennai | Custom PCs & Components",
            description:
                "Choose a trusted PC Builder in Chennai for custom gaming, work & high-performance PCs. Explore quality components and create a setup built for your needs.",
            images: ["https://www.itfixer.in/assets/img/logo.png"],
        },
    };
}

export default function Page() {
    return (
        <>
            {/* Schema (IMPORTANT for SEO 🔥) */}
            <Script
                id="shop-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Store",
                        "name": "ITFixer",
                        "url": "https://www.itfixer.in/shop",
                        "image": "https://www.itfixer.in/assets/img/logo.png",
                        "description":
                            "ITFixer offers gaming PCs, custom PC builds, components and accessories with expert assembly and fast delivery in Chennai.",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress":
                                "New No.29, Old No.31 & 32, Anjugam Nagar, 1st Street, Jafferkhanpet (Opp. Kasi Theatre), Ashok Nagar",
                            "addressLocality": "Chennai",
                            "addressRegion": "Tamil Nadu",
                            "postalCode": "600083",
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

            <Suspense fallback={
                <div className="col-12 d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
                    <div className="spinner-border" role="status" style={{ color: '#a6d719', width: '3.5rem', height: '3.5rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }>
                <ShopPage />
            </Suspense>
        </>
    );
}